import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useGetAssessmentByTermQuery } from "../../app/api/assessmentsApi"; // API hook to fetch assessments by term
import { useCreateResultMutation } from "../../app/api/resultsApi"; // Mutation hook for saving scores
import { useParams } from "react-router-dom"; // Import useParams to get the subjectId from the route
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import "./ScoresModal.css";

const ScoresModal = ({ selectedTerm, studentId, selectedSession }) => {
  // Get the subjectId from the route using useParams
  const { subjectId, classId } = useParams();

  // Fetch assessments based on the selectedTerm using the correct query, only if selectedTerm is defined
  const {
    data: assessmentsData,
    isLoading: assessmentsLoading,
    error: assessmentsError,
    refetch,
  } = useGetAssessmentByTermQuery(
    selectedTerm ? { termId: selectedTerm, classId, subjectId } : null,
    { skip: !selectedTerm }, // Skip fetching if selectedTerm is not set
  );

  const [scores, setScores] = useState({}); // State for storing inputted scores
  const [createResult, { isLoading: isSubmitting }] = useCreateResultMutation(); // Mutation hook for saving scores

  useEffect(() => {
    if (assessmentsError) {
      toast.error("Error fetching assessments");
    }
    if (selectedTerm) {
      refetch(); // Refetch the assessments when selectedTerm changes
    }
  }, [assessmentsError, selectedTerm, refetch]);

  const handleChange = (e, assessmentId) => {
    setScores({
      ...scores,
      [assessmentId]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(
      "Scores to save",
      selectedTerm,
      selectedSession,
      studentId,
      subjectId,
      scores,
    );
    if (!selectedTerm || !selectedSession || !studentId || !subjectId) {
      toast.error(
        "Please ensure all required data (studentId, sessionId, termId, id) is provided!",
      );
      return;
    }

    // Convert all IDs to numbers before using them in the payload
    const parsedStudentId = parseInt(studentId, 10);
    const parsedSessionId = parseInt(selectedSession, 10);
    const parsedTermId = parseInt(selectedTerm, 10);
    const parsedSubjectId = parseInt(subjectId, 10);

    const requests = assessmentsData.map(async (assessment) => {
      const score = scores[assessment.id];

      if (!score) {
        toast.warn(`No score entered for ${assessment.name}`);
        return;
      }

      // Construct the payload with all the required properties including subjectId from the route param
      const payload = {
        studentId: parsedStudentId, // Convert to number
        assessmentId: assessment.id,
        sessionId: parsedSessionId, // Convert to number
        termId: parsedTermId, // Convert to number
        marksObtained: parseInt(score, 10), // Convert score to number
        subjectId: parsedSubjectId, // Convert to number
      };

      try {
        await createResult(payload).unwrap(); // Call the API to save each result
        toast.success(`Score for ${assessment.name} saved successfully!`);
      } catch (error) {
        toast.error(`Failed to save score for ${assessment.name}`);
      }
    });

    // Wait for all the requests to complete
    await Promise.all(requests);
  };

  return (
    <Dialog>
      <DialogTrigger className="text-[#4A3AFF]">View/Edit Scores</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] flex justify-center flex-col">
        <DialogHeader>
          <DialogTitle className="text-center text-[24px]">
            View/Enter Scores
          </DialogTitle>
          <DialogDescription className="text-center">
            Enter the scores for each assessment.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          {!selectedTerm ? (
            <div className="text-red-500">
              Please select a term to view assessments.
            </div>
          ) : assessmentsLoading ? (
            <div>Loading assessments...</div>
          ) : assessmentsData?.length > 0 ? (
            assessmentsData.map((assessment) => (
              <div key={assessment.id} className="w-full">
                <label className="block text-gray-700">{assessment.name}</label>
                <input
                  type="number"
                  name={`assessment-${assessment.id}`}
                  value={scores[assessment.id] || ""} // Dynamic score input
                  onChange={(e) => handleChange(e, assessment.id)}
                  className="w-full p-2 border rounded-md"
                  placeholder={`Enter score for ${assessment.name}`}
                />
              </div>
            ))
          ) : (
            <div>No assessments available for the selected term.</div>
          )}
        </div>

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-[#4A3AFF] text-white"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Save Changes"
            )}
          </Button>
          <DialogTrigger asChild>
            <Button className="bg-gray-500 text-white">Close</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScoresModal;

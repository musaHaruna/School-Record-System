import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { useGetAllClassesQuery } from "../../../../app/api/classApi";
import {
  useGetAllSessionsQuery,
  useGetSessionTermsQuery,
} from "../../../../app/api/sessionsApi"; // Import session and terms query
import { useGetAllSubjectsQuery } from "../../../../app/api/allSubjectApi";
import { useUpdateAssessmentMutation } from "../../../../app/api/assessmentsApi";
import "./AssessmentModal.css";
import { useGetAssessmentDetailsQuery } from "../../../../app/api/assessmentsApi";

const SingleAssessment = ({ id }) => {
  const { id: routeSubjectId } = useParams();
  const subjectId = routeSubjectId ? parseInt(routeSubjectId) : null;

  const {
    data: singleAssessment,
    isLoading: singleAssessmentLoading,
    error: singleAssessmentError,
  } = useGetAssessmentDetailsQuery(id);

  const {
    data: classesData,
    isLoading: classesLoading,
    error: classesError,
  } = useGetAllClassesQuery();
  const {
    data: sessionsData,
    isLoading: sessionsLoading,
    error: sessionsError,
  } = useGetAllSessionsQuery();
  const {
    data: subjectsData,
    isLoading: subjectsLoading,
    error: subjectsError,
  } = useGetAllSubjectsQuery();
  const [selectedSession, setSelectedSession] = useState(""); // Track selected session
  const {
    data: sessionTermsData,
    isLoading: termsLoading,
    error: termsError,
  } = useGetSessionTermsQuery(selectedSession, {
    skip: !selectedSession, // Skip fetching terms if no session is selected
  });

  const [assessment, setAssessment] = useState({
    class: "",
    session: "",
    subject: subjectId ? subjectId : "",
    term: "",
    weight: "",
    name: "",
  });

  const [updateAssessment, { isLoading: isUpdating }] =
    useUpdateAssessmentMutation();

  // Preselect the class based on the preselected subject
  useEffect(() => {
    if (subjectId && subjectsData) {
      const selectedSubject = subjectsData.find(
        (subject) => subject.id === subjectId,
      );
      if (selectedSubject && selectedSubject.class) {
        setAssessment((prev) => ({
          ...prev,
          class: selectedSubject.class.id,
        }));
      }
    }

    setAssessment({
      name: singleAssessment?.name,
      weight: singleAssessment?.weight,
      term: singleAssessment?.term.id,
      subject: singleAssessment?.subject.id,
      class: singleAssessment?.class.id,
    });
  }, [subjectId, subjectsData]);

  // Preselect the last session when sessionsData is available
  useEffect(() => {
    if (sessionsData && sessionsData.length > 0) {
      const lastSession = sessionsData[sessionsData.length - 1].id;
      setAssessment((prev) => ({ ...prev, session: lastSession }));
      setSelectedSession(lastSession); // Update selected session for terms
    }
  }, [sessionsData]);

  // Handle session change and update terms based on selected session
  const handleSessionChange = (e) => {
    const selectedSessionId = e.target.value;
    setSelectedSession(selectedSessionId); // Update selected session
    setAssessment((prev) => ({
      ...prev,
      session: selectedSessionId,
      term: "",
    })); // Clear term when session changes
  };

  const handleChange = (e) => {
    setAssessment({ ...assessment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const assessmentData = {
      name: assessment.name,
      subjectId: parseInt(assessment.subject),
      classId: parseInt(assessment.class),
      sessionId: parseInt(assessment.session),
      termId: parseInt(assessment.term),
      weight: parseInt(assessment.weight),
    };

    try {
      await updateAssessment(assessmentData).unwrap();
      toast.success("Assessment Updated successfully", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Error creating assessment", { position: "top-center" });
    }
  };

  useEffect(() => {
    if (classesError) {
      toast.error("Error fetching classes", { position: "top-center" });
    }
    if (sessionsError) {
      toast.error("Error fetching sessions", { position: "top-center" });
    }
    if (subjectsError) {
      toast.error("Error fetching subjects", { position: "top-center" });
    }
    if (termsError) {
      toast.error("Error fetching terms", { position: "top-center" });
    }
  }, [classesError, sessionsError, subjectsError, termsError]);

  const filteredSubjects = subjectId
    ? subjectsData?.filter((subject) => subject.id === subjectId)
    : subjectsData;

  return (
    <Dialog>
      <DialogTrigger className="text-[#4A3AFF]">View</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] flex justify-center flex-col">
        <DialogHeader>
          <DialogTitle className="text-center text-[24px]">
            View Assessment
          </DialogTitle>
          <DialogDescription className="text-center">
            Check the details for the {assessment.name} assessment.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="w-full">
            <label className="block text-gray-700">Assessment Name</label>
            <input
              type="text"
              name="name"
              value={assessment.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter assessment name"
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-700">Weight</label>
            <input
              type="number"
              name="weight"
              value={assessment.weight}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter weight"
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-700">Subject</label>
            <select
              name="subject"
              value={assessment.subject}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Subject</option>
              {subjectsLoading ? (
                <option>Loading...</option>
              ) : (
                filteredSubjects?.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.subjectName}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="w-full">
            <label className="block text-gray-700">Class</label>
            <select
              name="class"
              value={assessment.class}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Class</option>
              {classesLoading ? (
                <option>Loading...</option>
              ) : (
                classesData?.map((classItem) => (
                  <option key={classItem.id} value={classItem.id}>
                    {classItem.name}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="w-full">
            <label className="block text-gray-700">Session</label>
            <select
              name="session"
              value={assessment.session}
              onChange={handleSessionChange} // Change session and update terms
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Session</option>
              {sessionsLoading ? (
                <option>Loading...</option>
              ) : (
                sessionsData?.map((session) => (
                  <option key={session.id} value={session.id}>
                    {session.name}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="w-full">
            <label className="block text-gray-700">Term</label>
            <select
              name="term"
              value={assessment.term}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              disabled={!selectedSession || termsLoading} // Disable until session is selected
            >
              <option value="">Select Term</option>
              {termsLoading ? (
                <option>Loading...</option>
              ) : (
                sessionTermsData?.map((term) => (
                  <option key={term.id} value={term.id}>
                    {term.name}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit} className="bg-[#4A3AFF] text-white">
            {isUpdating ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Update Assessment"
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

export default SingleAssessment;

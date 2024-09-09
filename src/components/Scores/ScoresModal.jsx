import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from '../ui/button';
import { useGetAllAssessmentsQuery } from '../../app/api/assessmentsApi'; // API hook to fetch assessments
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import './ScoresModal.css';

const ScoresModal = ({ id, type }) => {
  const { data: assessmentsData, isLoading: assessmentsLoading, error: assessmentsError } = useGetAllAssessmentsQuery(); // Fetch assessments

  const [scores, setScores] = useState({}); // Initial empty state for scores

  useEffect(() => {
    if (assessmentsError) {
      toast.error("Error fetching assessments");
    }
  }, [assessmentsError]);

  const handleChange = (e, assessmentId) => {
    setScores({
      ...scores,
      [assessmentId]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle saving the dynamic scores
    console.log(scores);
  };

  return (
    <Dialog>
      <DialogTrigger className="text-[#4A3AFF]">View/Edit</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] flex justify-center flex-col">
        <DialogHeader>
          <DialogTitle className="text-center text-[24px]">View/Enter Scores</DialogTitle>
          <DialogDescription className="text-center">
            Enter the scores for each assessment.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          {assessmentsLoading ? (
            <div>Loading assessments...</div>
          ) : (
            assessmentsData?.map((assessment) => (
              <div key={assessment.id} className="w-full">
                <label className="block text-gray-700">{assessment.name}</label>
                <input
                  type="number"
                  name={`assessment-${assessment.id}`}
                  value={scores[assessment.id] || ''} // Dynamic score input
                  onChange={(e) => handleChange(e, assessment.id)}
                  className="w-full p-2 border rounded-md"
                  placeholder={`Enter score for ${assessment.name}`}
                />
              </div>
            ))
          )}
        </div>

        <DialogFooter>
          <Button onClick={handleSubmit} className="bg-[#4A3AFF] text-white">
            {assessmentsLoading ? <Loader2 className="animate-spin" /> : "Save Changes"}
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

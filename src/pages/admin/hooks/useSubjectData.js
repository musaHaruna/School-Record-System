import { useGetAllSubjectsQuery } from "../api/subjectApi";

const useSubjectData = () => {
  const { data: subjects, error, isLoading } = useGetAllSubjectsQuery();

  return {
    subjects,
    error,
    isLoading,
  };
};

export default useSubjectData;

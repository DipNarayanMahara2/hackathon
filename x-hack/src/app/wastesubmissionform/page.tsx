import WasteSubmissionForm from "@/components/wastes/wastesubmissionform";

const WasteFormPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center mt-6">
        Submit Waste Details
      </h1>
      <WasteSubmissionForm />
    </div>
  );
};

export default WasteFormPage;

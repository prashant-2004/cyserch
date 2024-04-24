import TrainingPage from "../TrainingPage";

export default function Course() {
  return (
    <>
      <div className="TraningCourse">
        <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-8">
          Our Best Course
        </span>
        <h3 className="text-white text-[2.18rem] font-semibold mb-4">
          Featured Course On This Month
        </h3>
      </div>
      <TrainingPage />
    </>
  );
}

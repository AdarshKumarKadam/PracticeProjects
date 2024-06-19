import EduCard from "../../src/components/cards/EduCard";

const About = () => {
  const cardData = [
    {
      icon: "📚",
      title: 'PG-DAC , C-DAC ACTS Pune',
      description: 'Post Graduation Diploma in Advance Computing',
      year: 2023,
      score: 7.9
    },
    {
      icon: '🎓',
      title: 'Bachelor Of Engineering',
      description: 'D Y Patil College of Engg and Technology, Kolhapur',
      year: 2021,
      score: 8.9
    }
  ];
  return (
    <div id="about" className="max-w-screen-2xl container my-4  md:my-30 md:mb-20 mx-auto px-4 md:px-20 overflow-hidden">
      <div className="text-2xl font-semibold mb-4">About</div>
      <div className="w-full pt-12 p-4">
        <div className="grid gap-14 md:grid-cols-2 md:gap-15">
          {cardData.map((card, index) => (
            <EduCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              year={card.year}
              score={card.score}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

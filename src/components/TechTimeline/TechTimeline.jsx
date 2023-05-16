import "./TechTimeline.css";

const TechTimeline = ({ events }) => {
  return (
    <div className="tech-timeline" id="timeline">
      <div className="timeline">
        {events.map((event) => (
          <div className="timeline-event" key={event.id}>
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="timeline-illustration">
                <img src={event.illustration} alt={event.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTimeline;

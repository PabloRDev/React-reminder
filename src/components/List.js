import React from "react";

const List = ({ meeting }) => {
  return (
    <React.Fragment>
      {meeting.map((meeting) => {
        const { id, name, department, time, image } = meeting;
        return (
          <article key={id} className="meeting">
            <img src={image} alt={name} />
            <div>
              <h6 className="speaker">Speaker: </h6>
              <h4>{name}</h4>
              <h6 className="department">{department}</h6>
              <h5 className="time">{time}</h5>
            </div>
          </article>
        );
      })}
    </React.Fragment>
  );
};

export default List;

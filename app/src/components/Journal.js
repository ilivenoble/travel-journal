import React from "react"

export default function Journal(props) {
    return (
      <section className="journal-section">
        <img src={props.imageUrl} className="journal-img" />
        <div className="journal-text">
          <div className="location">
            <p className="location-name">
              {props.location}
              </p>
              <p className="map-link">
                {" "}
                <a href={props.googleMapsUrl}>View on Google Maps</a>{" "}
              </p>
          </div>

          <h1 className="journal-title">{props.title}</h1>
          <p>
            {props.startDate} - {props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </section>
    );
}
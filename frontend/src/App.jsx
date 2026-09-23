import { useState } from "react";
import ReactMarkdown from "react-markdown";

const INTERESTS = [
"Beaches",
"Food",
"History",
"Shopping",
"Adventure",
];

function App() {
const [destination, setDestination] = useState("");
const [days, setDays] = useState("");
const [budget, setBudget] = useState("");
const [travelers, setTravelers] = useState("");
const [interests, setInterests] = useState([]);
const [result, setResult] = useState(null);
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleInterest = (interest) => {
setInterests((current) =>
current.includes(interest)
? current.filter((item) => item !== interest)
: [...current, interest]
);
};

const handleSubmit = async (e) => {
e.preventDefault();

setError("");
setResult(null);

if (!destination.trim()) {
  setError("Please enter a destination.");
  return;
}

if (!days || Number(days) < 1) {
  setError("Please enter a valid number of days.");
  return;
}

if (!budget || Number(budget) <= 0) {
  setError("Please enter a valid budget.");
  return;
}

if (!travelers || Number(travelers) < 1) {
  setError("Please enter a valid number of travelers.");
  return;
}

if (interests.length === 0) {
  setError("Please select at least one travel interest.");
  return;
}

const tripData = {
  destination: destination.trim(),
  days: Number(days),
  budget: Number(budget),
  travelers: Number(travelers),
  interests,
};

try {
  setLoading(true);

  const response = await fetch(
    "http://127.0.0.1:5000/api/itinerary",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.error || "Unable to generate the itinerary."
    );
  }

  if (data.error) {
    throw new Error(data.error);
  }

  setResult(data);
} catch (err) {
  setError(
    err.message ||
      "Unable to connect to the server. Please make sure the Flask backend is running."
  );
} finally {
  setLoading(false);
}


};

const handleNewTrip = () => {
setDestination("");
setDays("");
setBudget("");
setTravelers("");
setInterests([]);
setResult(null);
setError("");


window.scrollTo({
  top: 0,
  behavior: "smooth",
});


};

return ( <div className="app"> <header className="hero"> <div className="hero-content"> <div className="hero-icon">✈️</div>

```
      <h1>AI Travel Itinerary Planner</h1>

      <p>
        Plan smarter with AI. Tell us where you want to go,
        your budget, travel preferences, and interests — and get
        a personalized day-by-day travel itinerary.
      </p>
    </div>
  </header>

  <main className="main-content">
    <section className="planner-card">
      <div className="section-title">
        <h2>Plan Your Trip</h2>
        <p>
          Enter your travel details and let AI create your
          personalized itinerary.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="destination">
              Destination
            </label>

            <input
              id="destination"
              type="text"
              placeholder="Example: Goa"
              value={destination}
              onChange={(e) =>
                setDestination(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="days">
              Number of Days
            </label>

            <input
              id="days"
              type="number"
              min="1"
              placeholder="Example: 3"
              value={days}
              onChange={(e) =>
                setDays(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">
              Total Budget (₹)
            </label>

            <input
              id="budget"
              type="number"
              min="1"
              placeholder="Example: 15000"
              value={budget}
              onChange={(e) =>
                setBudget(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="travelers">
              Number of Travelers
            </label>

            <input
              id="travelers"
              type="number"
              min="1"
              placeholder="Example: 2"
              value={travelers}
              onChange={(e) =>
                setTravelers(e.target.value)
              }
            />
          </div>

          <div className="form-group full-width">
            <label>Travel Interests</label>

            <div className="interests-container">
              {INTERESTS.map((interest) => (
                <div
                  className="interest-option"
                  key={interest}
                >
                  <input
                    id={interest}
                    type="checkbox"
                    checked={interests.includes(interest)}
                    onChange={() =>
                      handleInterest(interest)
                    }
                  />

                  <label htmlFor={interest}>
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        {loading && (
          <div className="loading">
            <span className="loading-spinner"></span>
            Creating your personalized itinerary...
          </div>
        )}

        <button
          className="generate-button"
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Generating Trip..."
            : "✨ Generate My Itinerary"}
        </button>
      </form>
    </section>

    {result && result.trip && (
      <section className="result-section">
        <div className="result-header">
          <h2>
            Your {result.trip.destination} Trip
          </h2>

          <p>
            Your personalized itinerary has been
            generated based on your travel preferences.
          </p>

          <div className="trip-summary">
            <div className="summary-card">
              <span className="summary-label">
                Destination
              </span>

              <span className="summary-value">
                📍 {result.trip.destination}
              </span>
            </div>

            <div className="summary-card">
              <span className="summary-label">
                Duration
              </span>

              <span className="summary-value">
                🗓️ {result.trip.days} Days
              </span>
            </div>

            <div className="summary-card">
              <span className="summary-label">
                Budget
              </span>

              <span className="summary-value">
                ₹
                {Number(result.trip.budget).toLocaleString(
                  "en-IN"
                )}
              </span>
            </div>

            <div className="summary-card">
              <span className="summary-label">
                Travelers
              </span>

              <span className="summary-value">
                👥 {result.trip.travelers}
              </span>
            </div>
          </div>
        </div>

        <div className="ai-response">
          <h3>🗺️ Your AI-Generated Itinerary</h3>

          <div className="ai-response-content">
            <ReactMarkdown>
              {result.itinerary}
              </ReactMarkdown>
              </div>
        </div>

        <button
          className="generate-button"
          type="button"
          onClick={handleNewTrip}
        >
          🔄 Plan Another Trip
        </button>
      </section>
    )}
  </main>

  <footer className="footer">
    <p>
      AI Travel Itinerary Planner • Built with React,
      Flask & Gemini AI
    </p>
  </footer>
</div>

);
}

export default App;

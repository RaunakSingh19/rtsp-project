import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import axios from "axios";

const OverlayManager = () => {
  const [overlays, setOverlays] = useState([]);
  const [newText, setNewText] = useState("");

  const API_URL = "http://localhost:5000/api/overlays";

  // Fetch overlays from backend
  const fetchOverlays = async () => {
    const res = await axios.get(API_URL);
    setOverlays(res.data);
  };

  useEffect(() => {
    fetchOverlays();
  }, []);

  // Create new overlay
  const handleAdd = async () => {
    const newOverlay = {
      type: "text",
      content: newText,
      position: { x: 100, y: 100 },
      size: { width: 200, height: 50 },
      color: "#ffffff",
    };
    await axios.post(API_URL, newOverlay);
    setNewText("");
    fetchOverlays();
  };

  // Update position/size in backend
  const handleUpdate = async (id, updatedOverlay) => {
    await axios.put(`${API_URL}/${id}`, updatedOverlay);
    fetchOverlays();
  };

  // Delete overlay
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchOverlays();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>🧩 Overlay Manager</h2>

      <input
        type="text"
        placeholder="Enter overlay text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button
        onClick={handleAdd}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Add Overlay
      </button>

      <div
        style={{
          marginTop: "20px",
          position: "relative",
          width: "720px",
          height: "405px",
          border: "1px solid #ccc",
          margin: "30px auto",
          background: "#000",
        }}
      >
        {overlays.map((overlay) => (
        //   <Rnd
        //     key={overlay._id}
        //     default={{
        //       x: overlay.position.x,
        //       y: overlay.position.y,
        //       width: overlay.size.width,
        //       height: overlay.size.height,
        //     }}
        <Rnd
  key={overlay._id}
  default={{
    x: overlay.position?.x || 100,
    y: overlay.position?.y || 100,
    width: overlay.size?.width || 200,
    height: overlay.size?.height || 50,
  }}
            onDragStop={(e, d) =>
              handleUpdate(overlay._id, {
                ...overlay,
                position: { x: d.x, y: d.y },
              })
            }
            onResizeStop={(e, direction, ref, delta, position) =>
              handleUpdate(overlay._id, {
                ...overlay,
                size: {
                  width: parseInt(ref.style.width),
                  height: parseInt(ref.style.height),
                },
                position,
              })
            }
          >
            <div
              style={{
                background: "rgba(255,255,255,0.2)",
                color: "white",
                padding: "5px",
                textAlign: "center",
                width: "100%",
                height: "100%",
                border: "1px solid white",
                borderRadius: "4px",
              }}
            >
              {overlay.content}
              <button
                onClick={() => handleDelete(overlay._id)}
                style={{
                  display: "block",
                  margin: "5px auto",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </Rnd>
        ))}
      </div>
    </div>
  );
};

export default OverlayManager;

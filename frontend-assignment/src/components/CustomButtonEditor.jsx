import React, { useState } from "react";


const CustomButtonEditor = () => {
  const [showForm, setShowForm] = useState(false);

  const [buttonConfig, setButtonConfig] = useState({
    link: "",
    text: "Book Now",
    color: "white",
    size: "medium",
    style: "outlined",
  });

  const [formData, setFormData] = useState({ ...buttonConfig });

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonConfig(formData);
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getSizeClass = () => {
    switch (buttonConfig.size) {
      case "small":
        return "btn-sm";
      case "large":
        return "btn-lg";
      default:
        return "btn-md";
    }
  };

  const getStyleClass = () => {
    return buttonConfig.style === "outlined" ? "btn-outlined" : "btn-filled";
  };

  return (
    <div className="editor-container">
      <button
        className={`custom-button ${getSizeClass()} ${getStyleClass()}`}
        style={{
          backgroundColor: buttonConfig.style === "filled" ? buttonConfig.color : "transparent",
          color: buttonConfig.style === "outlined" ? buttonConfig.color : "#fff",
          borderColor: buttonConfig.color,
        }}
        onClick={() => setShowForm(true)}
      >
        {buttonConfig.text}
      </button>

      {showForm && (
        <div className="modal">
          <form className="modal-form" onSubmit={handleSubmit}>
            <label>
              <div className="label-title">Link Button to page or URL</div>
              <div className="label-sub">You can select any specific page or paste URL</div>
              <select name="link" value={formData.link} onChange={handleChange}>
                <option value="">Select</option>
                <option value="https://example.com/page1">Page 1</option>
                <option value="https://example.com/page2">Page 2</option>
              </select>
            </label>

            <label>
              <div className="label-title">Button Style</div>
              <div className="label-sub">Filled with solid color or outlined</div>
              <select name="style" value={formData.style} onChange={handleChange}>
                <option value="filled">Fill</option>
                <option value="outlined">Outline</option>
              </select>
            </label>

            <label>
              <div className="label-title">Button Text</div>
              <div className="label-sub">Add call to action of button i.e. name</div>
              <input name="text" value={formData.text} onChange={handleChange} />
            </label>

            <label>
              <div className="label-title">Color</div>
              <div className="label-sub">Button color</div>
              <input name="color" type="color" value={formData.color} onChange={handleChange} />
            </label>

            <label>
              <div className="label-title">Button Size</div>
              <div className="label-sub">Size of button</div>
              <select name="size" value={formData.size} onChange={handleChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </label>

            <div className="modal-actions">
              <button type="submit">Save Button</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CustomButtonEditor;

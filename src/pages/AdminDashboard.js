import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import { API_BASE } from "../utils/api";
import {
  getAuthHeaders,
  getAuthHeadersForFormData,
  isAuthenticated,
  logout,
} from "../utils/auth";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("members");
  const [selectedAction, setSelectedAction] = useState("");
  const [formData, setFormData] = useState({});
  const [membersList, setMembersList] = useState([]);
  const [activitiesList, setActivitiesList] = useState([]);
  const [albumsList, setAlbumsList] = useState([]);
  const [galleryFiles, setGalleryFiles] = useState(null);
  const [galleryUploading, setGalleryUploading] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    if (!isAuthenticated()) {
      alert("Please login to access admin dashboard");
      window.location.href = "/login";
    }
  }, []);

  /* ================= MEMBERS VIEW (FIXED) ================= */
  const fetchMembers = async () => {
    try {
      const res = await fetch(
        "https://nss-website-backend.onrender.com/admin/get-users",
        { headers: getAuthHeaders() }
      );

      if (res.status === 401) {
        logout();
        return;
      }

      const data = await res.json();
      setMembersList(data || []);
    } catch (err) {
      console.error("Error fetching members:", err);
    }
  };

  /* ================= ACTIVITIES VIEW ================= */
  const fetchActivities = async () => {
    try {
      const res = await fetch(
        "https://nss-website-backend.onrender.com/admin/get-activities",
        { headers: getAuthHeaders() }
      );

      if (res.status === 401) {
        logout();
        return;
      }

      const data = await res.json();
      setActivitiesList(data || []);
    } catch (err) {
      console.error("Error fetching activities:", err);
    }
  };

  /* ================= ACTION CLICK ================= */
  const handleActionClick = (action) => {
    setSelectedAction(action);
    setFormData({});

    if (activeTab === "members" && action === "view") {
      fetchMembers();
    }

    if (activeTab === "activities" && action === "view") {
      fetchActivities();
    }
  };

  /* ================= FORM HANDLERS ================= */
  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://nss-website-backend.onrender.com/admin/add-user",
        {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("Member added successfully");
      setFormData({});
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://nss-website-backend.onrender.com/admin/update-user",
        {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("Member updated successfully");
      setFormData({});
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://nss-website-backend.onrender.com/admin/delete-user",
        {
          method: "DELETE",
          headers: getAuthHeaders(),
          body: JSON.stringify({ email: formData.email }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("Member deleted successfully");
      setFormData({});
    } catch (err) {
      alert(err.message);
    }
  };

  /* ================= RENDER FORMS ================= */
  const renderForm = () => {
    /* ---------- MEMBERS ---------- */
    if (activeTab === "members") {
      switch (selectedAction) {
        case "add":
          return (
            <form className="form-card" onSubmit={handleAddUser}>
              <h3>Add Member</h3>
              <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
              <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
              <input name="role" type="text" placeholder="Role" onChange={handleChange} required />
              <button>Add</button>
            </form>
          );

        case "update":
          return (
            <form className="form-card" onSubmit={handleUpdateUser}>
              <h3>Update Member</h3>
              <input name="existingEmail" placeholder="Existing Email" onChange={handleChange} required />
              <input name="newEmail" placeholder="New Email" onChange={handleChange} required />
              <input name="newRole" placeholder="New Role" onChange={handleChange} required />
              <button>Update</button>
            </form>
          );

        case "delete":
          return (
            <form className="form-card" onSubmit={handleDeleteUser}>
              <h3>Delete Member</h3>
              <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
              <button>Delete</button>
            </form>
          );

        case "view":
          return (
            <div className="form-card">
              <h3>Members List</h3>

              {membersList.length === 0 ? (
                <p>No members found</p>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Role</th>
                      <th>Vertical</th>
                    </tr>
                  </thead>
                  <tbody>
                    {membersList.map((m, i) => (
                      <tr key={i}>
                        <td>{m.email}</td>
                        <td>{m.password}</td>
                        <td>{m.role}</td>
                        <td>{m.vertical || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          );

        default:
          return <p className="placeholder-text">Select an action</p>;
      }
    }

    return <p className="placeholder-text">Select an action</p>;
  };

  /* ================= UI ================= */
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li
            className={activeTab === "members" ? "active" : ""}
            onClick={() => {
              setActiveTab("members");
              setSelectedAction("");
            }}
          >
            Members
          </li>
          <li
            className={activeTab === "activities" ? "active" : ""}
            onClick={() => {
              setActiveTab("activities");
              setSelectedAction("");
            }}
          >
            Activities
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="button-group">
          {["add", "update", "delete", "view"].map((action) => (
            <button
              key={action}
              onClick={() => handleActionClick(action)}
              className={selectedAction === action ? "selected" : ""}
            >
              {action.toUpperCase()}
            </button>
          ))}
        </div>

        {renderForm()}
      </main>
    </div>
  );
};

export default AdminDashboard;

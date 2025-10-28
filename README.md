# 🌻 SkillSwap – A Local Skill Exchange Platform  

🚩 **Update Note:** All updates will be declared here.

---

## 📖 Project Overview  

**SkillSwap** is an interactive platform that allows individuals to **offer, learn, and exchange skills** within their local community.  
Whether it’s guitar lessons, coding help, yoga training, or language exchange — users can **browse listings, connect with skill providers**, and **book sessions** seamlessly.  

This project was developed as part of **Assignment 09**, focusing on modern UI/UX design, authentication, protected routing, and smooth user interactions.


## ✨ Key Features  

### 🔹 General Features
- Fully responsive design (mobile, tablet, desktop)  
- Single Page Application (SPA) — No route reload errors  
- Modern, minimalist, and clean UI  
- Secure Firebase authentication (environment variables used)  
- Deployed on **Netlify**  

### 🔹 Functional Pages  
#### 🏠 Home Page
- Hero slider built with **Swiper.js / DaisyUI**
- “Popular Skills” section — dynamic cards loaded from JSON data  
- “Top Rated Providers” and “How It Works” sections  
- One additional custom section related to the website theme  

#### 📄 Skill Details Page (Protected)
- Accessible only after login  
- Displays complete skill details (image, price, rating, etc.)  
- Includes a **Book Session** form with Name, Email, and SweetAlert success message  

#### 👤 Authentication
- **Login**, **Signup**, and **Forgot Password** pages  
- Firebase email/password authentication  
- **Google Sign-In** integration  
- **Password validation**:
  - Must contain at least 1 uppercase letter  
  - Must contain at least 1 lowercase letter  
  - Minimum length: 6 characters  
- Password visibility toggle (eye icon)  
- Redirects users back to their intended route after login  

#### 🧾 My Profile Page
- Displays user’s name, email, and photo  
- Functional **Update Profile** button using `updateProfile()`  
- Profile editing for name and photo  

#### 🔐 Forgot Password
- Functional password reset system  
- Auto-fills user email if already typed on login page  
- Redirects user to Gmail after reset action  

---

## 🧩 JSON Data Example  

```json
[
  {
    "skillId": 1,
    "skillName": "Beginner Guitar Lessons",
    "providerName": "Alex Martin",
    "providerEmail": "alex@skillswap.com",
    "price": 20,
    "rating": 4.8,
    "slotsAvailable": 3,
    "description": "Acoustic guitar classes for complete beginners.",
    "image": "https://i.postimg.cc/example1.png",
    "category": "Music"
  },
  {
    "skillId": 2,
    "skillName": "Spoken English Practice",
    "providerName": "Sara Hossain",
    "providerEmail": "sara@skillswap.com",
    "price": 10,
    "rating": 4.6,
    "slotsAvailable": 5,
    "description": "Conversational English sessions for non-native speakers.",
    "image": "https://i.postimg.cc/example2.png",
    "category": "Language"
  }
]

---

## 🌐 Live Site URL  
🔗 [Click here to visit the live website](https://skillsswapforyourskill.netlify.app/)  

## 💻 GitHub Repository  
📁 [GitHub Repo Link](https://github.com/tanvirislamb/Skill-Swap)

---

# Pantry Management Application

This repository contains a pantry management application built with **Next.js**, **Material UI**, and **Firebase**. The application allows users to manage their pantry items, including adding, editing, deleting, and tracking the stock of various items. The use of Firebase provides real-time database functionality, user authentication, and cloud storage, while Material UI ensures a responsive and aesthetically pleasing user interface.

## Overview

The application is structured as follows:

### Frontend - Next.js and Material UI

- **Next.js** serves as the framework for the frontend, providing a powerful environment for building server-side rendered React applications. The project takes advantage of Next.js's features such as:
  - **Static Site Generation (SSG)** and **Server-Side Rendering (SSR)** for optimal performance and SEO.
  - **API Routes** to handle backend logic within the same project.
- **Material UI** is used for the user interface, offering a rich set of pre-built components that adhere to Google's Material Design guidelines. Key UI components include:
  - A **responsive dashboard** for managing pantry items.
  - **Forms** for adding and editing items, complete with validation and error handling.
  - **Theming and custom styles** to maintain a consistent look and feel throughout the application.

### Backend - Firebase

- **Firebase Authentication** is implemented to allow users to sign up, log in, and manage their accounts securely. The app supports various authentication methods, including email/password and third-party providers like Google.
- **Firebase Firestore** is used as the primary database to store pantry items. The real-time database capabilities of Firestore ensure that updates to the pantry are reflected immediately across all user devices.
  - Each user has a separate collection for their pantry items, enabling personalized experiences.
- **Firebase Cloud Storage** is integrated to allow users to upload and store images of their pantry items. This feature enhances item tracking by providing visual references.
- **Firebase Hosting** is utilized for deploying the application, taking advantage of its global CDN for fast and secure content delivery.
  
![image](https://github.com/user-attachments/assets/8ae5a33d-9e09-40cc-9843-2408568395df)

### Features

- **User Authentication**: Secure user authentication using Firebase Auth, with support for multiple sign-in methods.
- **Real-Time Database**: Real-time updates of pantry items using Firebase Firestore, ensuring data consistency across devices.
- **CRUD Operations**: Full CRUD (Create, Read, Update, Delete) functionality for managing pantry items.
- **Image Upload**: Ability to upload and store images of pantry items using Firebase Cloud Storage.
- **Responsive Design**: A responsive UI built with Material UI, ensuring a seamless experience on both desktop and mobile devices.

![image](https://github.com/user-attachments/assets/4e28fef3-8916-4ad5-8767-1683e7fea2a7)

### Deployment and Hosting

- The application is hosted on **Firebase Hosting**, providing fast and reliable delivery through a global CDN.
- **Next.js** ensures that the application is optimized for performance, with server-side rendering and static generation enhancing both speed and SEO.

## Conclusion

This pantry management application showcases the integration of **Next.js**, **Material UI**, and **Firebase** to create a modern, responsive, and real-time application. The use of Firebase for authentication, database management, and hosting streamlines the development process while providing robust backend services. Whether you're looking to manage your pantry more effectively or build a similar application, this project serves as a strong foundation for understanding how to combine these technologies.

**Note:** While the application covers many aspects of pantry management, there is room for further enhancements, such as adding inventory alerts, barcode scanning, or integrating with other smart home devices. Future enhancements are being made as well to enhance feautures.

### Advanced Features and Enhancements

- **Image Upload:** Users can capture images of pantry items using their mobile or browser camera and upload them to Firebase Storage.
- **Image Classification:** The application leverages the GPT Vision API or other large language models (LLMs) to classify uploaded images and update the pantry database accordingly.
- **GCP Vertex AI Integration:** For a more advanced machine learning capability, the application can be integrated with GCP Vertex AI to classify items using AutoML, enhancing the accuracy of image recognition.
- **Recipe Suggestions:** Based on the current contents of the pantry, the app can suggest recipes using the OpenAI API or OpenRouter API, providing users with practical meal ideas.


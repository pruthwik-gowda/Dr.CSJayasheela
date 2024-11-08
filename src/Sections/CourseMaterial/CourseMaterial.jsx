import React from "react";
import styles from './CourseMaterialStyles.module.css'; // Import the CSS module

export default function CourseMaterial() {
  // Function to open PDF in a new tab
  const openPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  // Example data for subjects and their related PDFs
  const subjects = [
    {
      name: "Mathematics",
      pdfLinks: [
        "https://drive.google.com/file/d/1abc/view?usp=sharing",
        "https://drive.google.com/file/d/2def/view?usp=sharing",
        "https://drive.google.com/file/d/3ghi/view?usp=sharing",
        "https://drive.google.com/file/d/4jkl/view?usp=sharing",
      ],
    },
    {
      name: "Science",
      pdfLinks: [
        "https://drive.google.com/file/d/5mno/view?usp=sharing",
        "https://drive.google.com/file/d/6pqr/view?usp=sharing",
        "https://drive.google.com/file/d/7stu/view?usp=sharing",
        "https://drive.google.com/file/d/8vwx/view?usp=sharing",
      ],
    },
    // Add more subjects here
  ];

  return (
    <section className={styles.main}>
      <h2 className={styles.heading}>Course Materials</h2>

      <div className={styles.courseMaterialList}>
        {subjects.map((subject, index) => (
          <div className={styles.subjectCard} key={index}>
            <h3>{subject.name}</h3>
            <div className={styles.pdfLinks}>
              {subject.pdfLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => openPdf(link)}
                  className={styles.pdfLinkBtn}
                >
                  Open PDF {index + 1}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

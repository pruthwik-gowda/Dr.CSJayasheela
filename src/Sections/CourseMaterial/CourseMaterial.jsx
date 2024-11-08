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
      name: "Software Engineering and Product Management",
      pdfLinks: [
        "https://docs.google.com/presentation/d/1R7hk-l32m6mCBm-lq1JJtQR3ow_-9JDU/edit?usp=sharing&ouid=115930030424195231367&rtpof=true&sd=true",
        "https://drive.google.com/drive/folders/1ZsWe24ySL2W3dKt7IKykzUpn_3EmQ3Ve?usp=sharing",
        "https://drive.google.com/drive/folders/18Okmj41329kjACVi_WjB8OZ6giFaThVT?usp=sharing",
        "https://docs.google.com/presentation/d/1a3iWJCUKrZfQtnLn7H_j5oKDViq_MwLQ/edit?usp=sharing&ouid=115930030424195231367&rtpof=true&sd=true",
        "https://docs.google.com/presentation/d/1E7YWqy6sW-r-8jsNkhwxy1HXPs2vJOzg/edit?usp=sharing&ouid=115930030424195231367&rtpof=true&sd=true"
      ],
    },
    {
      name: "Product Management",
      pdfLinks: [
        "https://drive.google.com/file/d/1hEIQ5aaL-sZynzAkOCpbS-ElEHH-Pnsz/view?usp=sharing",
        "https://drive.google.com/file/d/1zrYdpfLO2sm5dRbv-SKy996Ake1uTXum/view?usp=sharing",
        "https://drive.google.com/file/d/7stu/view?usp=sharing",
        "https://drive.google.com/file/d/8vwx/view?usp=sharing",
        "https://drive.google.com/file/d/8vwx/view?usp=sharing"
      ],
    },
    {
        name: "Computer Networks",
        pdfLinks: [
          "https://docs.google.com/presentation/d/1yfQTCFNVR13LuRivoDTBVqrZHjGybOhl/edit?usp=sharing&ouid=115930030424195231367&rtpof=true&sd=true",
          "https://docs.google.com/presentation/d/18WaRCAA1zEJc_RhNebfXIGOxnjYO9DSq/edit?usp=sharing&ouid=115930030424195231367&rtpof=true&sd=true",
          "https://drive.google.com/file/d/7stu/view?usp=sharing",
          "https://drive.google.com/file/d/8vwx/view?usp=sharing",
          "https://drive.google.com/file/d/8vwx/view?usp=sharing"
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
                  Open Module {index + 1}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

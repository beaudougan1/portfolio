const fraudDetection = {
  slug: "fraud-detection",

  title: "Credit Card Fraud Detection",

  type: "Machine Learning",

  category: "Machine Learning",

  featured: false,

  image: "/projects/fraud-detection/hero.png",

  heroLayout: "landscape",

  imageCaption:
    "Feature importance analysis from the Random Forest fraud detection model, highlighting the transaction features most influential in identifying fraudulent activity.",

  gallery: [
    {
      src: "/projects/fraud-detection/correlation-heatmap.png",
      caption:
        "Correlation heatmap showing relationships between anonymized transaction features and helping identify patterns in the fraud detection dataset.",
    },
    {
      src: "/projects/fraud-detection/final-comparison.png",
      caption:
        "Model evaluation comparing Logistic Regression and Random Forest classifiers using precision, recall, and F1 score. Random Forest delivered the strongest overall balance for identifying fraudulent transactions.",
    },
    {
      src: "/projects/fraud-detection/lr-confusion.png",
      caption:
        "Confusion matrix for the Logistic Regression classifier. The model provided a strong baseline but produced more false positives and missed fraudulent transactions than Random Forest.",
    },
    {
      src: "/projects/fraud-detection/rf-confusion.png",
      caption:
        "Confusion matrix for the final Random Forest model. The model reduced both false positives and false negatives compared to Logistic Regression, making it the preferred classifier.",
    },
  ],

  github: "",
  demo: "",

  description:
    "A machine learning project that detects fraudulent credit card transactions using anonymized transaction features and recall-focused model evaluation.",

  overview:
    "This project explores supervised machine learning for credit card fraud detection using anonymized transaction data. Logistic Regression and Random Forest classifiers were trained, tuned, and compared using precision, recall, F1 score, feature importance, correlation analysis, and confusion matrices. Because fraud detection is an imbalanced classification problem, the project emphasizes recall and missed-fraud reduction rather than relying on accuracy alone.",

  technologies: [
    "Python",
    "scikit-learn",
    "Pandas",
    "Matplotlib",
    "Random Forest",
    "Logistic Regression",
    "Machine Learning",
  ],

  achievements: [
    "Developed fraud detection models achieving up to 99.5% precision, 96.4% recall, and 97.9% F1 score.",
    "Compared Logistic Regression and Random Forest classifiers using precision, recall, F1 score, and confusion matrices.",
    "Used feature importance analysis to identify the strongest transaction indicators for fraud classification.",
    "Evaluated model performance with a recall-focused approach appropriate for imbalanced fraud detection data.",
  ],

  challenges: [
    "Working with anonymized financial transaction features.",
    "Handling class imbalance between legitimate and fraudulent transactions.",
    "Choosing evaluation metrics that reflect the real cost of missed fraud cases.",
    "Comparing model performance beyond simple accuracy.",
  ],

  lessons: [
    "Learned why recall is often more important than accuracy in fraud detection.",
    "Strengthened machine learning model evaluation skills using precision, recall, F1 score, and confusion matrices.",
    "Gained practical experience comparing linear and ensemble-based classification models.",
    "Improved understanding of feature importance and model interpretability.",
  ],

  futureImprovements: [
    "Implement ROC and precision-recall curve analysis.",
    "Experiment with additional ensemble learning methods.",
    "Test threshold tuning to better balance false positives and false negatives.",
    "Explore resampling strategies for imbalanced classification.",
  ],
};

export default fraudDetection;
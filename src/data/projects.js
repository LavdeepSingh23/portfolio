export const projects = [
  {
    id: 'enerlytics-ai',
    title: 'Enerlytics AI — ML Energy Optimization',
    tech: ['Python', 'Scikit-Learn', 'PCA', 'K-Means', 'Streamlit'],
    year: '2026',
    problem: 'Building energy management systems typically rely on simple threshold rules, failing to capture subtle, multi-variable correlation patterns in how commercial properties consume electricity.',
    whyItMattered: 'Energy inefficiency in commercial real estate leads to massive waste. Optimizing building profiles systematically reduces operational costs and carbon footprint.',
    whatIBuilt: 'Developed a clustering pipeline using PCA for dimensional reduction and K-Means for behavioral segmentation. Deployed an interactive Streamlit dashboard for real-time anomaly detection.',
    whatILearned: 'Discovered that feature representation (especially time-of-week consumption patterns) has a far greater impact on cluster quality than algorithm hyperparameter tuning.',
    stats: [
      { label: 'Buildings Analyzed', value: 52585, prefix: '', suffix: '' },
      { label: 'Behavioral Clusters', value: 4, prefix: '', suffix: '' },
      { label: 'Silhouette Score', value: 0.21, prefix: '', suffix: '', decimals: 2 },
      { label: 'CH Index', value: 15337, prefix: '', suffix: '' },
      { label: 'Potential Savings', value: 0.3, prefix: '$', suffix: 'M', decimals: 1 }
    ]
  },
  {
    id: 'acadhub',
    title: 'AcadHub',
    tech: ['MySQL', 'PL/SQL', 'Streamlit'],
    year: '2026',
    problem: 'Student management platforms were fragmented across LMS, WebKiosk, and offline repositories, leading to sync errors and duplicate record entry.',
    whyItMattered: 'Administrative lag directly impacts academic delivery. Centralizing student assessment and attendance simplifies scheduling and provides direct administrative clarity.',
    whatIBuilt: 'Engineered a unified academic portal built on a normalized relational database. Wrote PL/SQL triggers, procedures, and views to automate grades, attendance, and role-based access control.',
    whatILearned: 'Learned that query optimization and indexing strategy on join-heavy tables are critical to maintaining sub-second response times as database scale grows.',
    stats: [
      { label: 'Relational Entities', value: 12, prefix: '', suffix: '' },
      { label: 'Analytics Reports', value: 10, prefix: '', suffix: '+' }
    ]
  },
  {
    id: 'rul-prediction',
    title: 'Aircraft Engine RUL Prediction',
    tech: ['Python', 'TensorFlow', 'LSTM'],
    year: '2026',
    problem: 'Hard-threshold aircraft maintenance cycles lead to premature replacement of components or catastrophic mechanical failure under high-stress conditions.',
    whyItMattered: 'Accurately forecasting Remaining Useful Life (RUL) minimizes downtime and guarantees mechanical safety in aerospace applications.',
    whatIBuilt: 'Modeled aircraft engine failure vectors on NASA\'s C-MAPSS dataset. Formulated a sliding-window data generator and built an LSTM recurrent network to track degradation cycles.',
    whatILearned: 'Learned that stacking LSTM layers with dropout regularization mitigates gradient dissipation while preventing overfitting on limited time-series degradation runs.',
    stats: [
      { label: 'Engines Analyzed', value: 200, prefix: '', suffix: '' },
      { label: 'Max cycles logged', value: 20631, prefix: '', suffix: '' },
      { label: 'Training Sequences', value: 14241, prefix: '', suffix: '' }
    ]
  },
  {
    id: 'stackoverflow-duplicates',
    title: 'Stack Overflow Duplicate Detection',
    tech: ['Python', 'NLP', 'Sentence-BERT', 'K-Means'],
    year: 'URF Project',
    problem: 'High volume of duplicate submissions on community forums dilutes developer search relevance and divides community moderation efforts.',
    whyItMattered: 'Semantic matching ensures developers find high-quality solutions immediately without waiting for manual thread merging.',
    whatIBuilt: 'Crafted an unsupervised duplicate-question classifier using Sentence-BERT embeddings. Benchmarked embedding cosine similarity against classical TF-IDF and K-Means/DBSCAN clustering.',
    whatILearned: 'Discovered that pre-trained semantic sentence vectors scale significantly better for duplicate classification than classic bag-of-words approaches, which drop crucial context.',
    stats: [
      { label: 'Semantic Accuracy', value: 87.5, prefix: '', suffix: '%', decimals: 1 },
      { label: 'Evaluated Questions', value: 25000, prefix: '', suffix: '+' }
    ]
  }
];

// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A selection of projects in academic and professional contexts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-bookshelf",
          title: "Bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "books-the-experience-machine",
          title: 'The Experience Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_experience_machine/";
            },},{id: "books-thinking-fast-and-slow",
          title: 'Thinking Fast and Slow',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/thinking_fast_and_slow/";
            },},{id: "books-the-man-who-mistook-his-wife-for-a-hat",
          title: 'The Man Who Mistook His Wife for a Hat',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_man_mistook_wife_hat/";
            },},{id: "books-rules-for-a-flat-world",
          title: 'Rules for a Flat World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/rules_for_a_flat_world/";
            },},{id: "books-future-politics",
          title: 'Future Politics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/future_politics/";
            },},{id: "news-career-progression-i-have-started-my-dphil-phd-within-the-epsrc-centre-for-doctoral-training-in-autonomous-intelligent-machines-and-systems-at-the-university-of-oxford-cohosted-by-the-departments-of-computer-science-and-engineering-science-i-look-forward-to-the-work-i-will-undertake-predominantly-within-the-oxford-robotics-institute-over-the-next-four-years",
          title: 'Career Progression: I have started my DPhil (PhD) within the EPSRC Centre for...',
          description: "",
          section: "News",},{id: "news-award-nomination-i-am-happy-to-announce-that-my-master-s-dissertation-has-been-nominated-for-the-uk-geologist-s-association-curry-msc-prize-2026-awarded-for-the-best-msc-thesis-in-an-earth-sciences-application-in-the-uk-exploring-long-term-groundwater-dynamics-the-project-used-graph-attention-and-long-short-term-memory-networks-to-facilitate-sustainable-resource-management-in-sparse-and-ungauged-uk-catchments",
          title: 'Award Nomination: I am happy to announce that my master’s dissertation has been...',
          description: "",
          section: "News",},{id: "news-award-confirmation-i-have-been-awarded-a-distinction-89-for-my-master-s-dissertation-forecasting-using-gat-lstm-capturing-spatio-temporal-dynamics-in-sparsely-gauged-noisy-sensor-networks-supervised-by-dr-julia-knapp",
          title: 'Award Confirmation: I have been awarded a Distinction (89%) for my Master’s dissertation...',
          description: "",
          section: "News",},{id: "news-award-confirmation-i-have-graduated-from-the-university-of-durham-with-a-master-of-data-science-additionally-receiving-the-master-of-data-science-award-for-achieving-the-highest-performance-across-graduating-students-from-all-data-science-master-s-streams-with-a-grade-average-of-86",
          title: 'Award Confirmation: I have graduated from the University of Durham with a Master...',
          description: "",
          section: "News",},{id: "news-stem-outreach-i-spent-a-busy-but-rewarding-day-working-alongside-some-of-my-aims-cdt-colleagues-at-the-oxford-natural-history-museum-s-latest-super-science-saturday-event-built-around-the-theme-of-curiosity-through-hands-on-activities-and-discussions-we-explored-how-animals-use-signal-propagation-to-communicate-by-exploring-frequencies-vibrations-animal-sounds-and-the-participants-own-voices",
          title: 'STEM Outreach: I spent a busy but rewarding day working alongside some of...',
          description: "",
          section: "News",},{id: "news-award-confirmation-i-was-awarded-the-uk-geologist-s-association-curry-msc-prize-2026-awarded-for-the-best-msc-thesis-in-an-earth-sciences-application-in-the-uk-for-my-thesis-on-groundwater-modelling-using-gat-lstm-networks-in-sparse-and-ungauged-catchments",
          title: 'Award Confirmation: I was awarded the UK Geologist’s Association Curry MSc Prize 2026...',
          description: "",
          section: "News",},{id: "news-award-confirmation-i-was-awarded-the-inaugural-trinity-college-oxford-marconi-moseley-postgraduate-research-prize-for-my-work-on-biosignal-decoding-for-robust-uncertainty-aware-assistive-device-control-the-judges-highlighted-a-shared-willingness-to-question-established-practices-a-field-has-come-to-accept-as-settled-and-to-redefine-progress-as-a-key-strength-of-the-work-an-approach-that-continues-to-motivate-and-inform-my-research",
          title: 'Award Confirmation: I was awarded the inaugural Trinity College Oxford Marconi-Moseley Postgraduate Research...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project_template/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-characterising-control-roles-in-multimodal-biosignals",
          title: 'Characterising Control Roles in Multimodal Biosignals',
          description: "Principled fusion frameworks for assistive systems (Phase 1, HEAT Lab)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_phase1_HEAT/";
            },},{id: "projects-uncertainty-aware-allocation-of-multimodal-biosignals-for-robust-control",
          title: 'Uncertainty-Aware Allocation of Multimodal Biosignals for Robust Control',
          description: "Adaptive signal weighting for assistive devices under degradation (Phase 2, PNPL)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project_phase2_PNPL/";
            },},{id: "projects-groundwater-forecasting-in-sparse-sensor-networks",
          title: 'Groundwater Forecasting in Sparse Sensor Networks',
          description: "GAT-LSTM for spatio-temporal prediction at ungauged sites (MSc Thesis, Durham)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project_msc_gat_lstm/";
            },},{id: "projects-hyperloop-simulations-engineering",
          title: 'Hyperloop Simulations Engineering',
          description: "CFD and structural simulation for prototype development (University of Edinburgh HYPED Team)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project_hyped/";
            },},{id: "projects-urban-scale-modelling-for-a-net-zero-scotland",
          title: 'Urban-Scale Modelling for a Net-Zero Scotland',
          description: "Cluster-based retrofit planning for Edinburgh&#39;s domestic building stock (MA Thesis, University of Edinburgh)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project_architecture_thesis/";
            },},{id: "projects-production-scheduling-amp-optimisation-systems",
          title: 'Production Scheduling &amp;amp; Optimisation Systems',
          description: "ML and constraint-based optimisation for safety-critical manufacturing (Wolfwyse Ltd.)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project_wolfwyse/";
            },},{id: "projects-facility-modelling-for-regulated-manufacturing",
          title: 'Facility Modelling for Regulated Manufacturing',
          description: "Applied optimisation and spatial modelling for food and pharmaceutical production (J P Hildreth Ltd.)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project_hildreth/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

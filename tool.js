function createProjectHTML(project) {
    const linksHTML = project.links
        .map(link => `<a class="info" href="${link.url}">[${link.label}]</a>`)
        .join(' ');

    const awardHTML = project.award
        ? `<p class="strong"><i class="fas fa-medal"></i> ${project.award}</p>`
        : '';

    return `
        <div class="row research-project" data-sort="${project.sort}">
            <div class="col-md-4">
                <img src="${project.image}" class="portrait" alt="cover">
            </div>
            <div class="col-md-8">
                <h6>${project.title}</h6>
                <p class="text-muted">
                    ${project.authors} (${project.venue}) <br />
                    ${linksHTML}
                </p>
                ${awardHTML}
                <p>${project.description}</p>
            </div>
            <div class="col-md-12">
                <hr class="dash">
            </div>
        </div>
    `;
}

const researchProjectsData = [
    {
        title: 'From Self to AI Afterlife: Exploring Identity Work Transcending Death',
        image: 'research/AI-Afterlife-Identity-Work/cover.png',
        authors: '<u>Ying Lei</u>, Carman Neustaedter, Xiaojuan Ma, Shuai Ma',
        venue: 'Available at SSRN, 2026',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.2139/ssrn.6554164' },
            { label: 'SSRN', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6554164' }
        ],
        description: 'This work examines how people envision identity work in AI Afterlife. Through a qualitative study, we analyze how identity may be crafted, continued, and relationally negotiated through generative, interactive, and evolving posthumous AI systems.',
        tags: ['selected', 'self-identity', 'future-systems'],
        sort: '2026-04-10'
    },
    {
        title: 'WatchGuardian: Enabling User-Defined Personalized Just-in-Time Intervention on Smartwatch',
        image: 'research/WatchGuardian/recording_interface.png',
        authors: '<u>Ying Lei</u>, Yancheng Cao, Will Wang, Yuanzhe Dong, Changchang Yin, Weidan Cao, Ping Zhang, Jingzhen Yang, Bingsheng Yao, Yifan Peng, Chunhua Weng, Randy Auerbach, Lena Mamykina, Dakuo Wang, Yuntao Wang, Xuhai Xu',
        venue: 'ACM Health 2026',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1145/3788689' },
            { label: 'PDF', url: 'https://dl.acm.org/doi/epdf/10.1145/3788689' },
            { label: 'Website', url: 'https://sea-lab.space/Watchguardian/' }
        ],
        description: 'WatchGuardian is a smartwatch-based just-in-time intervention system that lets users define and detect their own undesirable actions from only a small number of samples. The project explores deployable human-centered AI for personalized behavior change, user-defined interventions, and everyday human agency.',
        tags: ['selected', 'ai-agency'],
        sort: '2026-01-01'
    },
    {
        title: '"AI Afterlife" as Digital Legacy: Perceptions, Expectations, and Concerns',
        image: 'research/AI-Afterlife/cover.jpg',
        authors: '<u>Ying Lei</u>, Shuai Ma, Yuling Sun, Xiaojuan Ma',
        venue: 'CHI 2025',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1145/3706598.3713933' },
            { label: 'PDF', url: 'https://dl.acm.org/doi/epdf/10.1145/3706598.3713933' },
            { label: 'Media', url: 'research/AI-Afterlife//ChinaDaily.pdf' }
        ],
        award: 'Best Paper Honorable Mention Award',
        description: 'This work studies AI-generated agents as posthumous digital legacies. Through a qualitative study, we examine how people imagine AI afterlife systems, and how such agents may reshape posthumous identity, remembrance, consent, family relationships, and the ethics of continuing presence after death.',
        tags: ['selected', 'self-identity', 'relations-protocols', 'future-systems'],
        sort: '2025-01-16'
    },
    {
        title: 'FamilyCanvas: Designing a Digital Calendar for Blended Families Through Autobiographical Design and Field Deployment',
        image: 'research/digital-calendar/cover-1.png',
        authors: '<u>Ying Lei</u>, Reese Muntean, Carman Neustaedter',
        venue: 'CHI Extended Abstract 2026',
        links: [
            {'label': 'Website', url: 'https://clab.iat.sfu.ca/FamilyCanvas/'},
            {'label': 'Video', url: 'https://vimeo.com/1179352745?share=copy&fl=sv&fe=ci'}
            // { label: 'PDF', url: 'research/digital-calendar/GI25Poster.pdf' }
        ],
        description: 'FamilyCanvas is a digital whiteboard calendar for blended families. Through a nine-month autobiographical design process and a five-week field deployment with two additional families, we examine how shared visibility, care work, coordination, and lightweight communication shape everyday domestic cooperation and family protocols.',
        tags: ['selected', 'relations-protocols'],
        sort: '2026-03-01'
    },
    {
        title: 'Exploring the Needs of Preschool-aged Children, Parents, and Grandparents for Communicating Over Distance',
        image: 'research/G2G/cover.png',
        authors: 'Denise Y. Geiskkovitch, Carman Neustaedter, <u>Ying Lei</u>, Azadeh Forghani',
        venue: 'DIS 2026',
        links: [
            { label: 'Video', url: 'https://vimeo.com/693993223?share=copy&fl=sv&fe=ci'}
            // { label: 'PDF', url: 'research/digital-calendar/GI25Poster.pdf' }
        ],
        description: 'This study explores how preschool-aged children, parents, and grandparents imagine communication over distance. Through video prototypes, we examine interaction forms, parental mediation, and intergenerational care practices that could support remote family relationships.',
        tags: ['relations-protocols'],
        sort: '2026-04-01'
    },
    {
        title: 'FamilyCanvas: A Family Whiteboard Calendar Designed for Blended Families',
        image: 'research/digital-calendar/cover.png',
        authors: '<u>Ying Lei</u>, Carman Neustaedter',
        venue: 'GI 2025 Poster',
        links: [
            { label: 'PDF', url: 'research/digital-calendar/GI25Poster.pdf' }
        ],
        description: 'This poster presents the initial design of FamilyCanvas, a whiteboard-calendar system for blended families with joint custody. The project investigates how digital family calendars can support scheduling, remote awareness, shared visibility, and everyday coordination across households.',
        tags: ['relations-protocols'],
        sort: '2025-05-16'
    },
    {
        title: 'Understanding the Effects of Restraining Finger Coactivation in Mid-Air Typing: from a Neuromechanical Perspective',
        image: 'research/mid-air typing/cover.jpg',
        authors: 'Hechuan Zhang, Xuewei Liang, <u>Ying Lei</u>, Yanjun Chen, Zhenxuan He, Yu Zhang, Lihan Chen, Hongnan Lin, Teng Han, Feng Tian',
        venue: 'UIST 2024',
        links: [
            { label: 'Video', url: 'https://www.youtube.com/watch?v=fZ4dgLCYmZo' },
            { label: 'DOI', url: 'https://doi.org/10.1145/3654777.3676441' },
            { label: 'PDF', url: 'research/mid-air typing/mid-air typing.pdf' },
            { label: 'Artifact', url: 'research/mid-air typing/artefact.jpg' }
        ],
        description: 'Typing in mid-air is often perceived as intuitive yet presents challenges due to finger coactivation, a neuromechanical phenomenon that involves involuntary finger movements stemming from the lack of physical constraints. This paper explores the neuromechanical effects of finger coactivation on mid-air typing, aiming to deepen our understanding and provide valuable insights to improve these interactions.',
        tags: [],
        sort: '2024-08-01'
    },
    {
        title: 'Unpacking ICT-supported Social Connections and Support of Late-life Migration: From the Lens of Social Convoys',
        image: 'research/late-life migrants/cover.jpg',
        authors: '<u>Ying Lei</u>, Shuai Ma, Yuling Sun.',
        venue: 'CHI 2024',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1145/3613904.3642898' },
            { label: 'PDF', url: 'research/late-life migrants/chi24-1000.pdf' },
            { label: 'Video', url: 'https://www.youtube.com/watch?v=c02uMf9_7S0' }
        ],
        description: 'This qualitative study examines how late-life migrants rebuild social connections and access support through ICTs. Using the lens of social convoys, we unpack how aging, migration, family ties, and digital communication shape identity, care, and ICT-mediated social support.',
        tags: ['selected', 'relations-protocols'],
        sort: '2024-05-01'
    },
    {
        title: '"Are You Really Sure?" Understanding the Effects of Human Self-Confidence Calibration in AI-Assisted Decision Making',
        image: 'research/decision making-confidence/cover.jpg',
        authors: 'Shuai Ma, Xinru Wang, <u>Ying Lei</u>, Chuhan Shi, Ming Yin, Xiaojuan Ma.',
        venue: 'CHI 2024',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1145/3613904.3642671' },
            { label: 'PDF', url: 'research/decision making-confidence/self_confidence_calibration.pdf' },
            { label: 'Video', url: 'https://www.youtube.com/watch?v=gCRIX8CCUKs' }
        ],
        description: 'This work examines appropriate reliance in AI-assisted decision-making from a human-centered perspective. We study how calibrating human self-confidence can help people decide when to trust AI, when to trust themselves, and how to maintain agency under uncertainty.',
        tags: ['ai-agency'],
        sort: '2024-05-02'
    },
    {
        title: 'Who Should I Trust: AI or Myself? Leveraging Human and AI Correctness Likelihood to Promote Appropriate Trust in AI-Assisted Decision-Making',
        image: 'research/decision making-trust/cover.jpg',
        authors: 'Shuai Ma, <u>Ying Lei</u>, Xinru Wang, Chengbo Zheng, Chuhan Shi, Ming Yin, Xiaojuan Ma.',
        venue: 'CHI 2023',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1145/3544548.3581058' },
            { label: 'PDF', url: 'research/decision making-trust/human_AI_CL.pdf' },
            { label: 'Video', url: 'https://www.youtube.com/watch?v=AWdUDaEqoSs' }
        ],
        description: 'This paper investigates how people make trust judgments in AI-assisted decision-making. We propose supporting appropriate reliance by comparing human and AI correctness likelihood at the instance level, helping users decide when to rely on AI and when to trust their own judgment.',
        tags: ['ai-agency'],
        sort: '2023-05-01'
    },
    {
        title: 'LDM-EEG: A Lightweight EEG Emotion Recognition Method Based on Dual-stream Structure Scaling and Multiple Attention Mechanisms',
        image: 'research/LDM-EEG/cover.jpg',
        authors: '<u>Ying Lei</u>, Feng Liu',
        venue: 'Computer Science 2023',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.11896/jsjkx.220300262' },
            { label: 'PDF', url: 'research/LDM-EEG/LDM-EEG.pdf' }
        ],
        description: 'EEG emotion recognition is a multi-channel time-series signal classification problem with high complexity, high information density, and massive data. This paper proposes a lightweight network based on dual-stream structural scaling and multiple attention mechanisms.',
        tags: [],
        sort: '2023-01-01'
    },
    {
        title: 'OPO-FCM: A Computational Affection based OCC-PAD-OCEAN Federation Cognitive Modeling Approach',
        image: 'research/OPO-FCM/cover.jpg',
        authors: 'Feng Liu, Han-Yang Wang, Si-Yuan Shen, Xun Jia, Jing-Yi Hu, Jia-Hao Zhang, Xi-Yi Wang, <u>Ying Lei</u>, Aimin Zhou, Jiayin Qi',
        venue: 'IEEE TCSS 2022',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1109/TCSS.2022.3199119' },
            { label: 'PDF', url: 'research/OPO-FCM/opo-fcm.pdf' }
        ],
        description: 'This work develops a cognitive model that combines deep learning and interpretable emotional psychology frameworks to support computational affection and personality modeling.',
        tags: [],
        sort: '2022-08-26'
    },
    {
        title: 'Interactive Storytelling Agents for Child Safety Education: Design, Implementation and Evaluation',
        image: 'project/bachelor/cover.png',
        authors: '<u>Ying Lei</u>',
        venue: 'Bachelor\'s Thesis',
        links: [
            {'label': 'PDF', url: 'project/bachelor/report.pdf'},
        ],
        description: 'This thesis explores how interactive storytelling agents can support child safety education. I conducted formative research, built a safety knowledge corpus and question-answering dataset, designed GPT-3-based story interactions, and evaluated the system through user studies.',
        tags: ['ai-agency'],
        sort: '2023-06-01'
    },
    // {
    //     title: 'Mind Catcher-Affective Computing based Edge-side Music Therapy System',
    //     image: 'project/music/cover.jpg',
    //     authors: '<u>Ying Lei</u>, Jiaqi Ruan, Yihao Zhou, Shuya Xu, Ruifang Cui',
    //     venue: 'National-level Undergraduate Innovation Project',
    //     links: [
    //         { label: 'PDF', url: 'project/music/report.pdf' },
    //         { label: 'System', url: 'project/music/application.jpg' }
    //     ],
    //     description: 'Identifying and regulating negative emotions is a challenging field. This project uses music therapy as a medium to influence emotions, combining music theory and computer innovation technology to create an edge-side music regulation system based on emotional computing.',
    //     tags: ['all', 'wellbeing'],
    //     sort: '2022-01-01'
    // }
];

const researchTabAliases = {
    selected: ['selected'],
    'ai-agency': ['ai-agency'],
    'self-identity': ['self-identity'],
    'relations-protocols': ['relations-protocols'],
    'future-systems': ['future-systems']
};

function getProjectsForTab(tab) {
    if (tab === 'all') {
        return [...researchProjectsData].sort((a, b) => b.sort.localeCompare(a.sort));
    }

    const tabTags = researchTabAliases[tab] || [tab];

    return researchProjectsData
        .filter(project => project.tags.some(tag => tabTags.includes(tag)))
        .sort((a, b) => b.sort.localeCompare(a.sort));
}

function renderResearchProjects(tab) {
    const container = document.getElementById('research-container');
    if (!container) return;

    const projects = getProjectsForTab(tab);
    container.innerHTML = projects.map(createProjectHTML).join('');
}

function setupResearchTabs() {
    const buttons = document.querySelectorAll('.research-tab');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderResearchProjects(button.dataset.tab);
        });
    });
}

function setupCollapsibles() {
    $('#toggle-more-news').click(function () {
        $('#news-more').slideToggle(function () {
            $('#news-more').is(':visible')
                ? $('#toggle-more-news').text('< Less')
                : $('#toggle-more-news').text('More >');
        });
        return false;
    });

    $('#toggle-more-award').click(function () {
        $('#award-more').slideToggle(function () {
            $('#award-more').is(':visible')
                ? $('#toggle-more-award').text('< Less')
                : $('#toggle-more-award').text('More >');
        });
        return false;
    });
}

function setupVideoAutoplayOnScroll() {
    $(window).on('scroll', function () {
        $('video').each(function () {
            var video = this;
            var rect = video.getBoundingClientRect();

            if (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= $(window).height() &&
                rect.right <= $(window).width()
            ) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
}

function setupEmailAnchor() {
    document.querySelectorAll('.email-anchor').forEach(function (a) {
        a.href = 'mailto:' + ['ying_lei', 'sfu.ca'].join('@');
    });
}

function setupProfilePhoto() {
    const photo = document.getElementById('profile-photo');
    if (!photo || !photo.dataset.src) return;

    photo.src = new URL(photo.dataset.src, window.location.href).href;
}

$(function () {
    setupResearchTabs();
    setupCollapsibles();
    setupVideoAutoplayOnScroll();
    setupEmailAnchor();
    setupProfilePhoto();
    renderResearchProjects('selected');
});

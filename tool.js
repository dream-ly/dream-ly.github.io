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
        title: 'WatchGuardian: Enabling User-Defined Personalized Just-in-Time Intervention on Smartwatch',
        image: 'research/WatchGuardian/recording_interface.png',
        authors: '<u>Ying Lei</u>, Yancheng Cao, Will Wang, Yuanzhe Dong, Changchang Yin, Weidan Cao, Ping Zhang, Jingzhen Yang, Bingsheng Yao, Yifan Peng, Chunhua Weng, Randy Auerbach, Lena Mamykina, Dakuo Wang, Yuntao Wang, Xuhai Xu',
        venue: 'ACM Health 2026',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1145/3788689' },
            { label: 'PDF', url: 'https://dl.acm.org/doi/epdf/10.1145/3788689' },
            { label: 'Website', url: 'https://sea-lab.space/Watchguardian/' }
        ],
        description: 'While just-in-time interventions (JITIs) have effectively targeted common health behaviors, individuals often have unique needs to intervene in personal undesirable actions that can negatively affect physical, mental, and social well-being. We present WatchGuardian, a smartwatch-based JITI system that empowers users to define custom interventions for these personal actions with a small number of samples.',
        tags: ['selected', 'hai', 'wellbeing'],
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
        description: 'The rise of generative AI technology has sparked interest in using digital information to create AI-generated agents as digital legacies. This paper presents a qualitative study examining users\' perceptions, expectations, and concerns regarding AI-generated agents as digital legacies.',
        tags: ['selected', 'hai', 'wellbeing'],
        sort: '2025-01-16'
    },
    {
        title: 'FamilyCanvas: Designing a Digital Calendar for Blended Families Through Autobiographical Design and Field Deployment',
        image: 'research/digital-calendar/cover-1.png',
        authors: '<u>Ying Lei</u>, Reese Muntean, Carman Neustaedter',
        venue: 'CHI Extended Abstract 2026',
        links: [
            {'label': 'Website', url: 'https://clab.iat.sfu.ca/FamilyCanvas/'}
            {'label': 'Video', url: 'https://vimeo.com/1179352745?share=copy&fl=sv&fe=ci'}
            // { label: 'PDF', url: 'research/digital-calendar/GI25Poster.pdf' }
        ],
        description: 'We present a design-oriented study of FamilyCanvas, a digital calendar for blended families, and examine how it was incorporated into everyday family life. We conducted a nine-month autobiographical design, followed by a five-week field study with two additional blended families.',
        tags: ['all', 'wellbeing'],
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
        description: 'We conducted a study in Canada with young children and their parents to explore the needs and preferences of young children when communicating with remote family, limiting the scope to grandparents. Through the use of video prototypes, we found a number of themes related to the types of interactions that devices should afford for young children.',
        tags: ['all', 'wellbeing'],
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
        description: 'Blended families with joint custody face challenges in scheduling and remote connections. In this study, we aim to design a digital calendar to address these challenges. At this stage, we have designed and developed an initial prototype calendar called FamilyCanvas using a whiteboard metaphor.',
        tags: ['all', 'wellbeing'],
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
        tags: ['all'],
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
        description: 'Migration and aging-related dilemmas have limited the opportunities for late-life migrants to rebuild social connections and access support. This paper reports a qualitative study examining the social connections and support of late-life migrants.',
        tags: ['selected', 'wellbeing'],
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
        description: 'In AI-assisted decision-making, it is crucial but challenging for humans to achieve appropriate reliance on AI. This paper approaches this problem from a human-centered perspective, human self-confidence calibration.',
        tags: ['selected', 'hai'],
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
        description: 'In AI-assisted decision-making, it is critical for human decision-makers to know when to trust AI and when to trust themselves. In this paper, we proposed to promote humans\' appropriate trust based on the correctness likelihood of both sides at a task-instance level.',
        tags: ['selected', 'hai'],
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
        description: 'EEG emotion recognition is a multi-channel time-series signal classification problem with high complexity, high information density and massive data. This paper proposes a lightweight network based on dual-stream structural scaling and multiple attention mechanisms.',
        tags: ['all', 'wellbeing'],
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
        description: 'This work develops a cognitive model that combines deep learning and interpretable emotional psychology frameworks to support computational affection-based modeling.',
        tags: ['all'],
        sort: '2022-08-26'
    },
    {
        title: 'Interactive Storytelling Agents for Child Safety Education: Design, Implementation and Evaluation',
        image: 'project/bachelor/cover.jpg',
        authors: '<u>Ying Lei</u>',
        venue: 'Bachelor\'s Thesis',
        links: [
            {'label': 'PDF', url: 'project/bachelor/report.pdf'},
        ],
        description: 'This thesis explores the use of Human-Centered AI to support child safety education by developing an interactive storytelling agent. To address existing challenges in this domain, I first conducted a formative study to understand the current practices and user needs, and proposed integrating safety education into narrative-based interactions. I then constructed a corpus of children’s safety knowledge through a semi-automated approach, and developed a safety knowledge matching and question answering dataset based on FairytaleQA. Building on this, we designed a GPT-3-based method to generate safety-related questions and answers within story contexts. Finally, I evaluated the system through user studies using interviews and questionnaires.',
        tags: ['all', 'wellbeing'],
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

function getProjectsForTab(tab) {
    if (tab === 'all') {
        return [...researchProjectsData].sort((a, b) => b.sort.localeCompare(a.sort));
    }

    return researchProjectsData
        .filter(project => project.tags.includes(tab))
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

$(function () {
    setupResearchTabs();
    setupCollapsibles();
    setupVideoAutoplayOnScroll();
    setupEmailAnchor();
    renderResearchProjects('selected');
});
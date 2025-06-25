
## Technical Skills
### Programming Languages
- Python, Shell

### Framework / Platforms
- Docker, Kubernetes, Grafana
- FastAPI, Pydantic, PyTorch
- RabbitMQ, Kafka, MySQL

### Tooling
- Git, Code-Server

### Foreign Language
- TOEIC 965/990


### Others
- Passionate of reading about and tinkering with latest open-source projects. Ability to learn new things fast and effectively.
- Strong experience in Linux system administration. Hands-on experience on setting up on premise systems, with or without kubernetes and implement best DevOps practices.
- Good understanding of OOP princinples & design patterns. I write beautiful and easily-maintained code.


## History


### AI Engineer
**2021-2025**
**Project:** Kaldi ASR Backend Revamp.
- **Description:**
- **Technologies:**
- **Responsibilities:**


**2019.02 - 2019.06**
**Project:** On-device Kaldi ASR.
- **Description:** VietMAP approached us with a unique challenge: developing an offline, on-device ASR solution. At the time, all our models were built using KaldiASR, the state-of-the-art C++-based speech recognition framework. However, no open-source projects existed for running Kaldi on Android devices. This presented us with a significant engineering challenge: making Kaldi work on the Android platform.
- **Technologies:** Shell, Python, KaldiASR, Docker, GStreamer, Android NDK, C++
- **Responsibilities:**
  - Conducted deep dive into KaldiASR ecosystem architecture and implementation
  - Mastered GStreamer framework and Android NDK for cross-platform development
  - Successfully ported online GStreamer-based Kaldi implementation from x86 to Android ARM architecture
  - Integrated ported implementation with GStreamer Android demo application to achieve real-time voice recognition
  - Project was archived when client pivoted to alternative solutions (including Google APIs integration)


**2019.06 - 2021**

**Project:** Kaldi ASR Backend Revamp.
- **Role:** AI Engineer
- **Description:** Redesigned ASR decoding backend architecture and coding convention for internal ASR backends and multiple on-premise customer installations. The existing system relied on basic shell scripting without containerization, making deployments challenging and requiring manual KaldiASR builds from source. The system also lacked proper testing, version control, and modern DevOps practices, presenting an opportunity to modernize the entire orchestration and deployment pipeline through containerization and automation.
- **Technologies:** Shell, Python, Docker, RabbitMQ, VAD, KaldiASR
- **Responsibilities:**
    - Help team members setting up an unified, browser-based development workflow with Code-Server.
    - Redesigned and implemented ASR decoding backend architecture.
    - Designed incremental and chained training/testing pipeline to streamline Kaldi model development and evaluation processes.
    - Introduced Docker and DevOps practices to the team. Containerized all microservices for consistent deployment across environments.
    - Conducted on-site deployments and system installations at multiple customer premises.



**2021 - 2022**

**Project:** Voice Meeting Note
- **Role:** AI Engineer.
- **Team:** Sole engineer collaborating with AI research team.
- **Description:** An automated meeting documentation system that transforms audio recordings into structured, searchable and text-normalized transcripts. The system intelligently separates multiple speakers, identifies voice segments, and generates timestamped text aligned with speaker identities, streamlining meeting follow-up and knowledge management processes.
- **Technologies:** Shell, Python, Docker, RabbitMQ, VAD, KaldiASR, XVector, CTranslate
- **Responsibilities:**
  - Designed, implemented and tested the system.
  - Collected & sythesized multi-way Vietnamese conversation dataset. Fine-tuned and test speaker embedding and diarzation model on collected dataset.
  - Conducted on-site deployments and system installations at multiple customer premises.



**2022 - 2023**

**Project:** Automated Content Moderation System
- **Role:** Lead AI Engineer
- **Team:** 2 Engineers collaborating with AI research team.
- **Description:** A comprehensive multi-modal content analysis platform that processes video content through automated audio-visual separation, copyright compliance checking, and policy violation detection. The system performs audio fingerprinting for licensing verification, audio-based adult content detection, speech-to-text conversion, and multi-model text analysis to identify sexual or politically sensitive content, ensuring platform safety and regulatory compliance.
- **Technologies:** Shell, Python, Docker, RabbitMQ, VAD, KaldiASR, CTranslate2, BERT
- **Responsibilities:**
  - Designed, implemented and tested hybrid content processing pipeline combining polling-based database monitoring and event-driven Kafka integration
  - Integrated various models for copyright violation detection, adult content screening, speech recognition and text-based content filtering. Worked with a junior engineer to implement Milvus that support multiple-GPUs indexing for copyright violation detection.
  - Deployed and managed the system on Kubernetes clusters.

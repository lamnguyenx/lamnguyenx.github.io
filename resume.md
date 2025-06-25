# Tung Lam Nguyen
**AI Engineer**<br>
HANOI, VIETNAM<br>
+84-987-858-527<br>
lamfm95@gmail.com<br>

## Summary

I’m an AI backend engineer with 6.5 years of experience building speech processing systems that are performant, scalable, and easy to maintain.

## Technical Skills

### Programming Languages
- Python, Shell

### Frameworks / Platforms
- Docker, Kubernetes, Grafana
- FastAPI, Pydantic, PyTorch
- RabbitMQ, Kafka, MySQL
- Pytest, Locust, JMeter
- Unity3D, Daz3D

### Tooling
- Git, Code-Server

### Foreign Language
- English (TOEIC 965/990)
- French (DELF B1)

### Others
- Passionate about exploring and experimenting with the latest technology.
- Experienced in Linux system administration, including hands-on deployment of on-premise systems (both Kubernetes and non-Kubernetes environments).
- Good understanding of object-oriented programming (OOP) principles and design patterns; develop clean, maintainable, and well-structured code.


## Personal Experience

**2024.10 - 2025.01**

**Project:** 3D Digital Human System
- **Role:** AI Engineer
- **Team:** 1 Engineer + 1 AI Research Team
- **Description:** A photorealistic 3D conversational AI system that combines natural language processing with real-time 3D human avatar rendering. The system creates lifelike digital humans capable of natural conversation with synchronized facial expressions, lip-sync, and body language to deliver human-like interactive experiences.
- **Technologies:** Python, Blender, Daz3D, NeuroSync, Unity3D, C#, ChatDollKit
- **Responsibilities:**
  - Acquired 3D graphics fundamentals and content creation workflows
  - Developed programmable animation systems in Unity3D using C# for real-time character control and interaction
  - Implemented speech-to-blendshape mapping algorithms to achieve accurate lip-sync and facial expression rendering synchronized with audio output
  - Integrated conversational AI pipeline including speech-to-text, text-to-speech, and large language models.


**2022 - Now**

**Project:** HanoiVoiceAPIs
- **Role:** AI Engineer
- **Team:** 1 Engineer + 1 AI Research Team
- **Description:** A comprehensive speech processing library that consolidates years of development into a unified, modular codebase.
- **Responsibilities:**
  - Implemented Python best practices and highly reusable code patterns, with continuous updates and improvements incorporated after each project completion.
  - Integrated multiple speech processing capabilities including speech recognition, speaker recognition, speaker diarization, voice activity detection, text normalization, and call quality assessment into a single, well-tested codebase with ~80% test coverage.
  - Developed flexible pipeline composition architecture, enabling developers to chain processing modules in any desired sequence for custom workflows.
  - Built rapid deployment system that transforms locally-tested processing chains into production-ready API workers within half a day, accelerating development-to-deployment cycles.
  - Forked Black Python formatter to create Blax, and implemented custom formatting rules for improved code aesthetics and readability.


**2021 - Now**

**Project:** Voicemail Transcription System
- **Role:** Lead AI Engineer
- **Team:** 2 Engineers + 1 AI research team
- **Description:** A high-performance, distributed voicemail transcription system that handles enterprise-level telecommunication traffic.
- **Technologies:** Python, Shell, Docker, RabbitMQ, Kafka, KaldiASR
- **Responsibilities:**
  - Designed, developed and tested the system to max-out throughput on servers with multiple Nvidia Tesla T4 / A30 GPUs.
  - Successfully deployed the system, achieving 200k+ calls/hour peak throughput capacity.


**2021 - 2024**

**Project:** Automated Content Moderation System
- **Role:** Lead AI Engineer
- **Team:** 2 Engineers + 1 AI research team
- **Description:** A comprehensive multi-modal content analysis platform that processes video content through automated audio-visual separation, copyright compliance checking, and policy violation detection. The system performs audio fingerprinting for licensing verification, audio-based adult content detection, speech-to-text conversion, and multi-model text analysis to identify sexual or politically sensitive content, ensuring platform safety and regulatory compliance.
- **Technologies:** Python, Shell, Docker, RabbitMQ, FFMPEG, KaldiASR, CTranslate2, BERT
- **Responsibilities:**
  - Designed, developed and tested hybrid content processing pipeline combining polling-based database monitoring and event-driven Kafka integration
  - Integrated various models for copyright violation detection, adult content screening, speech recognition and text-based content filtering. Worked with a junior engineer to implement Milvus that support multiple-GPUs indexing for copyright violation detection.
  - Deployed and managed the system on Kubernetes clusters, processing 200+ hours of videos per day.

**2021 - 2023**

**Project:** Phone Call Quality Assessment System
- **Role:** AI Engineer
- **Team:** 1 Engineer + 1 AI research team
- **Description:** A high-performance, distributed phone call quality assessment system that handles enterprise-level telecommunication traffic.
- **Technologies:** Python, Shell, Docker, RabbitMQ
- **Responsibilities:**
  - Designed, developed and tested the system to max-out throughput on servers with multiple Nvidia Tesla T4 GPUs.
  - Successfully deployed the system to monitor 40% of a major telecommunications company's voice traffic

**2021 - 2023**

**Project:** Voice Meeting Note
- **Role:** AI Engineer
- **Team:** 1 Engineer + 1 AI research team
- **Description:** An automated meeting documentation system that transforms audio recordings into structured, searchable and text-normalized transcripts. The system intelligently separates multiple speakers, identifies voice segments, and generates timestamped text aligned with speaker identities, streamlining meeting follow-up and knowledge management processes.
- **Technologies:** Python, Shell, Docker, RabbitMQ, KaldiASR, XVector, CTranslate
- **Responsibilities:**
  - Designed, developed and tested the system.
  - Collected & sythesized multi-way Vietnamese conversation dataset. Trained, fine-tuned and test speaker embedding and diarzation models on collected dataset.
  - Conducted on-site deployments and system installations at multiple customer premises.

**2019.06 - 2021**

**Project:** Kaldi ASR Backend Revamp.
- **Role:** AI Engineer
- **Team:** 1 Engineer + 1 AI research team
- **Description:** Redesigned ASR decoding backend architecture and coding convention for internal ASR backends and multiple on-premise customer installations. The existing system relied on basic shell scripting without containerization, making deployments challenging and requiring manual KaldiASR builds from source. The system also lacked proper testing, version control, and modern DevOps practices, presenting an opportunity to modernize the entire orchestration and deployment pipeline through containerization and automation.
- **Technologies:** Python, Shell, Docker, RabbitMQ, KaldiASR
- **Responsibilities:**
    - Help team members setting up an unified, browser-based development workflow with Code-Server.
    - Redesigned and developed ASR decoding backend architecture.
    - Designed incremental and chained training/testing pipeline to streamline Kaldi model development and evaluation processes.
    - Introduced Docker and DevOps practices to the team. Containerized all microservices for consistent deployment across environments.
    - Conducted on-site deployments and system installations at multiple customer premises.

**2019.02 - 2019.06**

**Project:** On-device Kaldi ASR.
- **Description:** VietMAP approached us with a unique challenge: developing an offline, on-device ASR solution. At the time, all our models were built using KaldiASR, the state-of-the-art C++-based speech recognition framework. However, no open-source projects existed for running Kaldi on Android devices. This presented us with a significant engineering challenge: making Kaldi work on the Android platform.
- **Technologies:** Python, Shell, KaldiASR, Docker, GStreamer, Android NDK, C++
- **Responsibilities:**
  - Conducted deep dive into KaldiASR ecosystem, GStreamer framework and Android NDK.
  - Successfully ported online GStreamer-based Kaldi implementation from x86 to Android ARM architecture
  - Integrated ported implementation with GStreamer Android demo application to achieve real-time voice recognition
  - Project was archived when client pivoted to a more mature solution.

## Education

**Hanoi University of Science and Technology**<br>
*Master in Industrial Informatics - PFIEV Program*<br>
Thesis: *A Study on Improving Speaker Diarization System*<br>
2020 - 2022

**Hanoi University of Science and Technology**<br>
*Bachelor in Industrial Informatics - PFIEV Program*<br>
Thesis: *A Voice-Controlled Quiz Game*<br>
2012 - 2017

**HUS High School for Gifted Students**<br>
*Department of Physics*<br>
2009 - 2012

## Publications

**LightVoc: An upsampling-free GAN vocoder based on Conformer and inverse short-time Fourier transform** <br>
DS Dang, **TL Nguyen**, BT Ta, TT Nguyen, TNA Nguyen, DL Le, NM Le, et al.<br>
*Proc. Interspeech*, 3043-3047, 2023

**A multi-task conformer for spoofing aware speaker verification** <br>
BT Ta, **TL Nguyen**, DS Dang, DL Le
*2022 IEEE Ninth International Conference on Communications and Electronics*, 2022<br>

**Speaker diarization for Vietnamese conversations using deep neural network embeddings** <br>
**TL Nguyen**, BT Ta, TAX Tran, NM Le<br>
*2022 IEEE Ninth International Conference on Communications and Electronics*, 2022
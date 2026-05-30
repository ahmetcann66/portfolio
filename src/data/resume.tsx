import { Icons } from "@/components/icons";
import { Bot, GraduationCap, HomeIcon, NotebookIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ahmet Can Bozkurt",
  initials: "ACB",
  url: "https://github.com/ahmetcann66",
  location: "Erzurum, Türkiye",
  locationLink: "https://www.google.com/maps/place/erzurum",
  description:
    "Gömülü sistem geliştirici, İHA kontrol yazılımları ve robotik sistemler üzerine çalışan Atatürk Üniversitesi öğrencisi.",
  summary:
    "Atatürk Üniversitesi Bilişim Sistemleri ve Teknolojileri 3. sınıf öğrencisiyim. Savunma sanayii odaklı gömülü yazılım, İHA sistemleri, robotik hareket algoritmaları, sensör füzyonu ve gerçek zamanlı bilgisayarla görü alanlarında çalışıyorum. MISSoft stajı ve robotik eğitmenliği deneyimimle hem ürün geliştirme hem de eğitim tarafında aktif üretim yapıyorum.",
  avatarUrl: "WhatsApp Image 2026-05-30 at 19.35.13.jpeg",
  skills: [
    { name: "C" },
    { name: "C++" },
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Nodejs },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
    { name: ".NET MAUI", icon: Csharp },
    { name: "Arduino" },
    { name: "ESP32" },
    { name: "OpenCV" },
    { name: "MediaPipe" },
    { name: "MAVLink" },
    { name: "ArduPilot" },
    { name: "Mission Planner" },
    { name: "Docker", icon: Docker },
    { name: "Linux" },
    { name: "Git/GitHub", icon: Icons.github },
    { name: "SQL", icon: Postgresql },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://github.com/ahmetcann66", icon: Icons.github, label: "GitHub" },
    { href: "https://missoft.com.tr", icon: Icons.globe, label: "Website" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ahmetcann66",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://missoft.com.tr",
        icon: Icons.x,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "MISSoft",
      href: "https://missoft.com.tr",
      icon: Bot,
      badges: [],
      location: "Ata Teknokent, Erzurum",
      title: "Gömülü Sistem Geliştirici",
      logoUrl: "",
      start: "2024",
      end: "Present",
      description:
        "4 bacaklı savaş örümcek robotu için kinematik, yürüyüş algoritmaları ve gerçek zamanlı C/C++ kontrol yazılımı geliştirdim. Drone ve İHA sistemleriyle yazılım entegrasyonu, Mission Planner görev planlama, ArduPilot konfigürasyonu, OpenCV tabanlı hedef takibi ve IMU + görsel sensör füzyonu prototipleri üzerinde çalıştım. ESP32 üzerinde gömülü sistem programlama yaptım.",
    },
    {
      company: "MISSoft",
      badges: [],
      href: "https://missoft.com.tr",
      icon: Bot,
      location: "MISKod Yazılım Akademi, Ata Teknokent, Erzurum",
      title: "Robotik Kodlama Eğitmeni",
      logoUrl: "",
      start: "2024",
      end: "2025",
      description:
        "C/C++ ve Python dillerinde robotik kodlama müfredatı tasarladım ve uygulamalı eğitimler verdim. Gömülü sistem, Arduino ve sensör programlama konularını ilk ve orta yaş öğrencilere aktardım. Öğrenci başarıları ve mezuniyet süreci yerel ve ulusal basında yer aldı.",
    },
    {
      company: "DEPRON",
      href: "#",
      badges: [],
      location: "İHA / Robotik görüntü işleme projesi",
      title: "Görüntü İşleme Ekibi - Gönüllü Katılım",
      logoUrl: "",
      start: "2025",
      end: "Present",
      description:
        "İHA kamera görüntüleri üzerinde nesne etiketleme ve annotasyon yaptım; makine öğrenmesi modeli eğitimi için veri hazırlığını yönettim.",
    },
  ],
  education: [
    {
      school: "Atatürk Üniversitesi",
      href: "https://www.atauni.edu.tr/",
      icon: GraduationCap,
      degree: "Bilişim Sistemleri ve Teknolojileri - 3. Sınıf",
      logoUrl: "",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "UAV-Fleet-Command-CLI",
      dates: "2025 - Present",
      description:
        "C ile geliştirilmiş CLI tabanlı yer kontrol istasyonu. Çoklu İHA modeli desteği, filo komut yönetimi ve gerçek zamanlı görev akışı sunar.",
      technologies: ["C", "CLI", "MAVLink", "ArduPilot", "Mission Planner"],
      image: "",
    },
    {
      title: "gestural-uav-control",
      dates: "2025",
      description:
        "MediaPipe el iskeleti algılama ile işaretçisiz el hareketlerinden gerçek zamanlı İHA komutu üreten kontrol katmanı.",
      technologies: ["Python", "MediaPipe", "OpenCV", "MAVLink"],
      image: "",
    },
    {
      title: "Sentinel-Fusion-Sim",
      dates: "2025 - Present",
      description:
        "Radar, termal ve optik verileri birleştiren savunma sistemi simülasyonu. Çok sensörlü hedef tespit ve takip mimarisi üzerine kurulu.",
      technologies: ["C++", "Sensor Fusion", "OpenCV", "Real-time Systems"],
      image: "",
    },
    {
      title: "SIP-Core",
      dates: "2025 - Present",
      description:
        "SIP / VoIP / WebSocket tabanlı gerçek zamanlı iletişim çekirdeği. Çağrı yönetimi ve oturum kontrol katmanlarını içerir.",
      technologies: ["JavaScript", "WebSocket", "SIP", "VoIP", "Spring Boot", ".NET MAUI"],
      image: "",
    },
    {
      title: "VidSync-AI",
      dates: "2025 - Present",
      description:
        "OpenAI Whisper STT ve Ollama (Mistral-7B) ile gerçek zamanlı transkripsiyon ve özetleme servisi. FastAPI, WebSocket, Docker ve Cloudflare Tunnel ile dağıtıldı.",
      technologies: ["Python", "FastAPI", "WebSocket", "Docker", "OpenAI Whisper", "Ollama"],
      image: "",
    },
  ],
  hackathons: [],
} as const;

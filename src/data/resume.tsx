import { Icons } from "@/components/icons";
import { Bot, GraduationCap, HomeIcon, NotebookIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Ahmet Can Bozkurt",
  initials: "ACB",
  url: "https://github.com/ahmetcann66",
  location: "Erzurum, Türkiye",
  locationLink: "https://www.google.com/maps/place/erzurum",
  description:
    "Gömülü Sistem Geliştirici | Robotik & İHA Yazılımları. Savunma sanayii disipliniyle donanım-yazılım entegrasyonu ve bilgisayarlı görü alanlarına odaklanıyorum.",
  summary:
    "Atatürk Üniversitesi Bilişim Sistemleri ve Teknolojileri 3. sınıf öğrencisiyim. Savunma sanayii odaklı gömülü yazılım, İHA sistemleri, robotik hareket algoritmaları, sensör füzyonu ve gerçek zamanlı bilgisayarla görü alanlarında aktif olarak projeler geliştiriyorum. MISSoft bünyesindeki gömülü sistem geliştiriciliği ve robotik eğitmenliği rollerimle hem endüstriyel ürün geliştirme süreçlerinde yer alıyor hem de uygulamalı müfredat tasarımı yürütüyorum.",
  avatarUrl: "/WhatsApp Image 2026-05-30 at 19.35.13.jpeg", // Görselin public klasöründe olduğundan emin ol
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
    { name: "Roboflow" },
    { name: "MAVLink" },
    { name: "ArduPilot" },
    { name: "Mission Planner" },
    { name: "Inverse Kinematics" },
    { name: "Sensör Entegrasyonu" },
    { name: "OOP" },
    { name: "FastAPI" },
    { name: "WebSocket" },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Linux" },
    { name: "Git/GitHub", icon: Icons.github },
    { name: "SQL", icon: Postgresql },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "https://github.com/ahmetcann66", icon: Icons.github, label: "GitHub" },
    { href: "https://missoft.com.tr", icon: Icons.globe, label: "Website" },
  ],
  contact: {
    email: "ahmetcanbozkurt295@gmail.com", // Burayı doldurabilirsin
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ahmetcann66",
        icon: Icons.github,
        navbar: true,
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
      end: "Devam Ediyor",
      description:
        "4 bacaklı savaş örümcek robotu projesinde kinematik, ters kinematik (inverse kinematics), yürüyüş algoritmaları ve servo motor kontrol yazılımlarını OOP prensipleriyle kararlı ve modüler mimaride C/C++ kullanarak geliştirdim. Drone/İHA sistem entegrasyonları, Mission Planner ve ArduPilot tabanlı uçuş konfigürasyon testleri gerçekleştirdim. OpenCV tabanlı gerçek zamanlı hedef takip boru hatları tasarımı ile IMU ve görü sensör füzyonu prototipleri ürettim. ESP32 platformunda UART, I2C, SPI ve PWM arayüzleri üzerinden HC-SR04 gibi çeşitli sensörlerin gerçek zamanlı veri işleme süreçlerini yönettim.",
    },
    {
      company: "MISSoft (MISKod Akademi)",
      href: "https://missoft.com.tr",
      icon: Bot,
      badges: [],
      location: "Ata Teknokent, Erzurum",
      title: "Robotik Kodlama Eğitmeni",
      logoUrl: "",
      start: "2024",
      end: "2025",
      description:
        "C/C++ ve Python dillerinde özgün robotik kodlama müfredatı tasarlayarak ilk ve orta yaş grubu öğrencilere gömülü sistemler, Arduino mimarisi ve sensör programlama eğitimleri verdim. Danışmanlığını üstlendiğim öğrencilerin görme engelliler için geliştirdiği yardımcı teknoloji projesi birincilik elde etti. Eğitim ve mezuniyet süreçleri Günebakış, Global Bakış ve Özgün Haber gibi ulusal/yerel medya organlarında geniş yer buldu.",
    },
    {
      company: "DEPRON",
      href: "#",
      icon: Bot,
      badges: ["Gönüllü"],
      location: "Uzaktan",
      title: "Görüntü İşleme Ekibi",
      logoUrl: "",
      start: "2024",
      end: "2024",
      description:
        "İHA ve robotik bilgisayarlı görü projeleri kapsamında, makine öğrenmesi modellerinin eğitimi için İHA kamera görüntülerinin veri hazırlama süreçlerini üstlendim. Roboflow ve ArgoNaut 3.52 yazılımlarını aktif kullanarak nesne tespiti (object detection) modelleri için veri setlerinin etiketlenmesi, annotasyon, veri artırma (augmentation) ve dataset yönetimi iş akışlarını yürüttüm. Mission Planner ile uçuş verilerini inceleyerek görev senaryoları analizi yaptım.",
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
      end: "Devam Ediyor",
    },
  ],
  projects: [
    {
      title: "UAV-Fleet-Command-CLI",
      dates: "Şubat 2026 - Günümüz",
      active: true,
      description:
        "Çoklu İHA yönetimi ve simülasyon yeteneğine sahip, MIT lisanslı Yer Kontrol İstasyonu (GCS) yazılımı. C diliyle CLI tabanlı geliştirilen sistem; TB2, AKINCI ve AKSUNGUR modellerine gerçek zamanlı filo komuta ve görev akış kontrolü sağlar.",
      technologies: ["C", "CLI", "MAVLink", "ArduPilot", "Mission Planner", "Otonom Sistemler"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ahmetcann66",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "gestural-uav-control",
      dates: "2025",
      active: true,
      description:
        "Gerçek zamanlı ve işaretçisiz el hareketleri vasıtasıyla İHA kontrol katmanı prototipi. MediaPipe el iskelet yapısı algılama mimarisi ile OpenCV üzerinden işlenen verileri MAVLink protokolüne dönüştürerek anlık uçuş komutları üretir.",
      technologies: ["Python", "MediaPipe", "OpenCV", "MAVLink", "Computer Vision"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ahmetcann66",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Sentinel-Fusion-Sim",
      dates: "2025 - Günümüz",
      active: true,
      description:
        "Radar, termal ve optik veri akışlarını eşzamanlı birleştiren savunma sistemi simülasyonu. Çok sensörlü hedef tespit, takip mimarisi ve sensör füzyonu algoritmalarının gerçek zamanlı sistemler üzerindeki performans testlerini içerir.",
      technologies: ["C++", "Sensor Fusion", "OpenCV", "Real-time Systems", "Simülasyon"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ahmetcann66",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "SIP-Core",
      dates: "Mayıs 2026",
      active: true,
      description:
        "SIP, VoIP ve WebSocket protokolleri üzerinde koşan, yüksek performanslı ve gerçek zamanlı iletişim çekirdeği yazılımı. Çağrı yönetimi ve oturum kontrol katmanlarını barındırır; Spring Boot, .NET MAUI ve Maven entegrasyonlarına sahiptir.",
      technologies: ["JavaScript", "WebSocket", "SIP", "VoIP", "Spring Boot", ".NET MAUI", "C#"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ahmetcann66",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "VidSync-AI",
      dates: "2025 - Günümüz",
      active: true,
      description:
        "Video görüşmeleri için tasarlanmış gerçek zamanlı AI transkripsiyon ve akıllı özetleme mimarisi. OpenAI Whisper STT servisi ve yerelde çalışan Ollama LLM (Mistral-7B) modelini entegre eder. FastAPI ve WebSocket altyapısıyla kurulup Docker ve Cloudflare Tunnel ile dağıtılmıştır.",
      technologies: ["Python", "FastAPI", "WebSocket", "Docker", "OpenAI Whisper", "Ollama (Mistral-7B)", "Cloudflare"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ahmetcann66",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "gesture-controlled-spatial-ui",
      dates: "2025",
      active: true,
      description:
        "El hareketleriyle kontrol edilebilen uzamsal arayüz (spatial UI) çalışması. Bilgisayarlı görü teknikleri kullanarak el hareketlerini dijital arayüz etkileşimlerine dönüştürür.",
      technologies: ["Python", "Computer Vision", "UI/UX"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ahmetcann66",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "yummi_go",
      dates: "2025",
      active: true,
      description:
        "Dart ve Flutter mimarisiyle geliştirilmiş modern mobil uygulama. Arka planda C# ile yazılmış güçlü ve ölçeklenebilir bir Backend API desteğine sahiptir.",
      technologies: ["Dart", "Flutter", "C#", "Backend API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ahmetcann66",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
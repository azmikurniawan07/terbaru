import { Download, User, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-2 p-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tentang Saya
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              Lulusan Sistem Informasi dengan minat dan keahlian dalam
              pengelolaan data, pengembangan sistem berbasis web, dan jaringan
              komputer. Berpengalaman dalam dunia pendidikan sebagai tenaga
              pendidik yang mampu menyampaikan materi teknologi informasi dan
              komunikasi secara efektif kepada siswa.
            </p>
            <p>
              Memiliki kemampuan komunikasi yang baik, terbiasa bekerja dalam
              tim maupun individu, dan terus belajar mengikuti perkembangan
              teknologi terbaru.
            </p>
            <p>
              Saya terbiasa mengajar mata pelajaran Dasar-Dasar Kejuruan dan
              Konsentrasi Kejuruan RPL untuk siswa kelas X dan XI.
            </p>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Web Development/Teacher
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dengan pengalaman lebih dari tiga tahun dalam pengembangan web
                dan lebih dari dua tahun di bidang pengajaran, saya memiliki
                keahlian dalam merancang dan mengembangkan aplikasi yang
                skalabel, responsif, serta ramah pengguna dengan memanfaatkan
                teknologi modern. Saya memiliki dedikasi tinggi terhadap
                penulisan kode yang bersih, penerapan desain yang intuitif, dan
                penciptaan pengalaman pengguna yang optimal, dengan fokus pada
                kualitas, efisiensi, dan inovasi dalam setiap proyek yang saya
                kerjakan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Saya senang bekerja dengan React, Node.js, TypeScript, dan
                kerangka kerja CSS modern untuk membangun aplikasi yang tidak
                hanya tampak hebat tetapi juga berkinerja sangat baik. Saya
                selalu bersemangat untuk mempelajari teknologi baru dan
                mengerjakan proyek-proyek yang menantang.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Pasaman Barat, Sumatera Barat</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Bersedia untuk proyek</span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://drive.google.com/file/d/1lhOwNn05YcJ4l_P7fDV-Xj0gK-tYKiZ7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gradient-bg hover:shadow-glow transition-all duration-300">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
  { number: "50+", label: "Projects Selesai", delay: 0 },
  { number: <>3+<sup className="gradient-text text-sm align-super ">th</sup></>, label: "Pengalaman Kerja", delay: 0.1 },
  { number: "20+", label: "Pelanggan yang puas", delay: 0.2 },
  { number: "85%", label: "Kepuasan klien", delay: 0.3 },
].map(({ number, label, delay }) => (
  <motion.div
    key={label}
    initial={{ opacity: 0, y: 30, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.6 + delay }}
    whileHover={{
      scale: 1.05,
      boxShadow: "var(--shadow-colored)",
      borderColor: "hsl(var(--primary))",
    }}
    className="group"
  >
    <Card className="p-6 text-center hover-lift border-2 border-transparent transition-all duration-300 bg-card/80 backdrop-blur-sm">
      <motion.div
        className="gradient-text text-3xl font-bold mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: 0.8 + delay,
          type: "spring",
        }}
      >
        {number}
      </motion.div>
      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
        {label}
      </p>
    </Card>
  </motion.div>
))}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

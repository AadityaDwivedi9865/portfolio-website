import { FaGraduationCap, FaUserTie, FaCode, FaHeart, FaLightbulb, FaUsers } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiGit, SiGithub } from "react-icons/si";

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 85, icon: SiHtml5, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", level: 80, icon: SiJavascript, color: "from-yellow-400 to-orange-500" },
    { name: "React", level: 75, icon: SiReact, color: "from-blue-400 to-cyan-500" },
    { name: "Git/GitHub", level: 70, icon: SiGithub, color: "from-gray-700 to-gray-900" },
    { name: "Problem Solving", level: 85, icon: FaCode, color: "from-green-500 to-emerald-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-5xl font-extrabold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate engineering student with a love for technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <FaUserTie className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Aaditya Dwivedi</h3>
                  <p className="text-purple-600 font-medium">B.Tech Student</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  I'm Electronics and Communication Engineer <strong>B.Tech in Electronics and Communication</strong> from 
                  <strong> UIT-RGPV, Bhopal</strong>. My passion lies in <strong>Web Development</strong>, 
                  <strong> DSA</strong>, and building impactful projects that solve real-world problems.
                </p>
                
                <div className="flex items-center space-x-2 text-green-600">
                  <FaHeart className="text-lg" />
                  <span className="font-medium">Passionate about technology and innovation</span>
                </div>
              </div>
            </div>

            {/* Academic Achievements */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <FaGraduationCap className="text-3xl text-indigo-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Academic Excellence</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                  <span className="font-medium">CGPA</span>
                  <span className="text-2xl font-bold text-indigo-600">7.01</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <span className="font-medium">12th Standard</span>
                  <span className="text-2xl font-bold text-green-600">84.8%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <span className="font-medium">10th Standard</span>
                  <span className="text-2xl font-bold text-blue-600">84.6%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Skills */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <FaCode className="text-3xl text-purple-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="text-xl" />
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Experience */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover-lift">
              <div className="flex items-center mb-6">
                <FaUsers className="text-3xl text-pink-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">Leadership & Teaching</h3>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <FaLightbulb className="text-2xl text-pink-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">A.R. Coaching Classes</h4>
                      <p className="text-gray-600">
                        Mentored over <strong>100 students</strong> from rural areas, helping them excel in their studies.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <FaUsers className="text-2xl text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">School Headboy</h4>
                      <p className="text-gray-600">
                        Led school events and assemblies, developing strong organizational and leadership skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Goals */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto hover-lift">
            <h3 className="text-3xl font-bold gradient-text mb-4">My Goals</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I aspire to become a <strong>full-stack developer</strong> and contribute to innovative projects 
              that make a positive impact on people's lives. I'm constantly learning new technologies and 
              improving my problem-solving skills to achieve this goal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

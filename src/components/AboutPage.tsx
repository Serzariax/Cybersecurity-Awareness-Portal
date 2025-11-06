import { Shield, Network, Users, Award, CheckCircle, Calendar, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import drLukhonaDukuzaImage from 'figma:asset/99f380cdd0d0f496a20b58188ff40a2c6511b75f.png';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    setIsSubscribing(true);
    // Simulate API call
    setTimeout(() => {
      setEmail('');
      setIsSubscribing(false);
      setShowThankYouDialog(true);
    }, 1000);
  };

  const teamMembers = [
    {
      name: 'Dr. Lukhona Dukuza',
      title: 'Chief Information Security Officer',
      image: drLukhonaDukuzaImage,
      initials: 'LD',
      bio: 'Leading cybersecurity strategy with 15+ years of experience in enterprise security.',
    },
    {
      name: 'Xolela Solomon',
      title: 'Security Operations Manager',
      image: '',
      initials: 'XS',
      bio: 'Overseeing 24/7 security operations and incident response coordination.',
    },
    {
      name: 'Sinovuyo Njamela',
      title: 'Incident Response Lead',
      image: '',
      initials: 'SN',
      bio: 'Specializing in rapid threat detection and mitigation strategies.',
    },
    {
      name: 'Lesedi Sunduza',
      title: 'Security Awareness Director',
      image: '',
      initials: 'LS',
      bio: 'Developing training programs that empower employees to be security champions.',
    },
    {
      name: 'Lebogang Mafa',
      title: 'Threat Intelligence Analyst',
      image: '',
      initials: 'LM',
      bio: 'Monitoring global threat landscapes and providing actionable intelligence.',
    },
    
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Awareness Campaign Launch',
      description: 'Initiated company-wide cybersecurity awareness program reaching all employees.',
    },
    {
      year: '2021',
      title: 'Zero Trust Architecture',
      description: 'Implemented comprehensive zero trust security framework across all systems.',
    },
    {
      year: '2022',
      title: 'Incident Response Framework',
      description: 'Updated and expanded incident response capabilities with AI-powered threat detection.',
    },
    {
      year: '2023',
      title: 'Security Certification',
      description: 'Achieved ISO 27001 and SOC 2 Type II certifications for information security.',
    },
    {
      year: '2024',
      title: 'AI Security Integration',
      description: 'Deployed machine learning models for predictive threat intelligence.',
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Extended security operations to support international teams across 6 continents.',
    },
  ];

  const partners = [
    { name: 'CrowdStrike', logo: 'CS' },
    { name: 'Palo Alto Networks', logo: 'PA' },
    { name: 'Microsoft Security', logo: 'MS' },
    { name: 'Cisco SecureX', logo: 'CX' },
    { name: 'IBM Security', logo: 'IB' },
    { name: 'Fortinet', logo: 'FT' },
  ];

  const achievements = [
    { icon: Award, text: '99.8% Threat Detection Rate', color: 'teal' },
    { icon: CheckCircle, text: 'Zero Major Breaches in 2024', color: 'green' },
    { icon: Users, text: '10,000+ Employees Trained', color: 'blue' },
    { icon: Shield, text: 'ISO 27001 Certified', color: 'purple' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-teal-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-teal-500" />
          </div>
          <h1 className="text-white text-4xl lg:text-5xl mb-6">
            Our Cybersecurity Commitment
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            At SecureGuard, we believe that cybersecurity is everyone's responsibility. Our mission is to create a culture of security awareness where every employee is empowered to protect our organization's digital assets. Through comprehensive training, cutting-edge technology, and a dedicated team of experts, we maintain the highest standards of data protection and incident response.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="bg-slate-900 border-slate-800 text-center">
                <CardContent className="pt-6">
                  <div className={`bg-${achievement.color}-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`h-6 w-6 text-${achievement.color}-500`} />
                  </div>
                  <p className="text-slate-300 text-sm">{achievement.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-white text-3xl mb-3">Meet Our Security Team</h2>
            <p className="text-slate-400">
              Dedicated professionals working around the clock to keep you safe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-teal-500">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-teal-600 text-white text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-white text-xl mb-1">{member.name}</h3>
                    <Badge className="bg-teal-600 text-white mb-3">{member.title}</Badge>
                    <p className="text-slate-400 text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-white text-3xl mb-3">Our Security Journey</h2>
            <p className="text-slate-400">
              Major milestones in building a secure organization
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-800"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Year badge */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-teal-600 rounded-full items-center justify-center z-10 border-4 border-slate-950">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                    <Card className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all">
                      <CardHeader>
                        <div className="flex items-center gap-2 lg:hidden mb-2">
                          <Badge className="bg-teal-600 text-white">{item.year}</Badge>
                        </div>
                        <CardTitle className="text-white">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-400">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Year on opposite side */}
                  <div
                    className={`hidden lg:block ${
                      index % 2 === 0 ? 'text-left' : 'lg:col-start-1 text-right'
                    }`}
                  >
                    <div className="text-4xl text-teal-400">{item.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mb-8">
          <div className="text-center mb-10">
            <h2 className="text-white text-3xl mb-3">Trusted Security Partners</h2>
            <p className="text-slate-400">
              Collaborating with industry leaders to deliver best-in-class protection
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-teal-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-teal-500 text-xl">{partner.logo}</span>
                    </div>
                    <p className="text-slate-400 text-sm text-center">{partner.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-teal-900 to-blue-900 border-teal-700 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_50%)]"></div>
            </div>
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-white text-3xl mb-4">Stay Updated on Security Threats</h2>
                <p className="text-teal-100 text-lg mb-8">
                  Subscribe to our newsletter and receive the latest security alerts, tips, and best practices directly in your inbox.
                </p>
                
                <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:border-white"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="bg-white text-teal-900 hover:bg-slate-100 px-8"
                  >
                    {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>

                <p className="text-teal-200 text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 mt-10">
                  <div className="text-center">
                    <div className="text-2xl text-white mb-1">Weekly</div>
                    <div className="text-teal-200 text-sm">Threat Updates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-white mb-1">Monthly</div>
                    <div className="text-teal-200 text-sm">Security Tips</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-white mb-1">Instant</div>
                    <div className="text-teal-200 text-sm">Critical Alerts</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-teal-900 to-blue-900 border-teal-700">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl mb-2">Vigilance</h3>
                  <p className="text-teal-100 text-sm">
                    Constant monitoring and proactive threat detection to stay ahead of emerging risks
                  </p>
                </div>
                <div>
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Network className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl mb-2">Collaboration</h3>
                  <p className="text-teal-100 text-sm">
                    Working together across teams to build a unified defense against cyber threats
                  </p>
                </div>
                <div>
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl mb-2">Empowerment</h3>
                  <p className="text-teal-100 text-sm">
                    Equipping every employee with knowledge and tools to be a security champion
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thank You Dialog */}
        <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
          <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-md">
            <DialogHeader>
              <div className="mx-auto mb-4 bg-teal-500/10 w-16 h-16 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-teal-500" />
              </div>
              <DialogTitle className="text-white text-center text-2xl">Thank You for Subscribing!</DialogTitle>
              <DialogDescription className="text-slate-400 text-center">
                You've successfully subscribed to our security newsletter.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="bg-slate-800 rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    Weekly threat updates delivered to your inbox
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    Monthly security tips and best practices
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-300 text-sm">
                    Instant alerts for critical security updates
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm text-center">
                Check your email for a confirmation message. Stay secure!
              </p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={() => setShowThankYouDialog(false)}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
              >
                Got it, thanks!
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

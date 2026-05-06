/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React, { ReactNode } from 'react';
import {
  Video,
  PhoneCall,
  TrendingUp,
  MessageCircle,
  Gift,
  ShoppingCart,
  CheckCircle2
} from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: ReactNode; delay?: number; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] font-sans text-slate-400 selection:bg-blue-500/30">
      {/* Navbar / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-[#0B1120]/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <div className="text-slate-100 font-display text-xl sm:text-2xl font-bold tracking-tight">
            Agência<span className="text-blue-500">.</span>
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-medium">
            Proposta Comercial
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 pt-32 pb-24 sm:pt-40 sm:pb-32 flex flex-col gap-24 sm:gap-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Proposta de Parceria
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-6xl text-white font-bold leading-tight tracking-tight"
          >
            Estratégia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Marketing & Vendas</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed font-light"
          >
            Acelere o crescimento do seu negócio com um ecossistema digital que combina conteúdo, tráfego e excelência em vendas.
          </motion.p>
        </section>

        {/* Deliverables Section */}
        <section className="flex flex-col gap-12">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4">Plano de Ação</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Tudo que sua marca precisa para atrair, engajar e converter novos clientes de forma previsível e consistente.</p>
            </div>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: <Video className="w-6 h-6 text-blue-400" />,
                title: "3 Vídeos Semanais",
                desc: "Produção e edição de conteúdo de alto impacto para aumentar o alcance e o engajamento da sua marca nas redes sociais."
              },
              {
                icon: <PhoneCall className="w-6 h-6 text-blue-400" />,
                title: "Mentoria Quinzenal",
                desc: "Calls estratégicas focadas em melhorar o atendimento, abordagem (follow-up) e técnicas avançadas de fechamento."
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
                title: "Tráfego Pago Estratégico",
                desc: "Gestão inteligente de anúncios para capturar leads qualificados e escalar suas vendas com assertividade."
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
                title: "Suporte e Alinhamento",
                desc: "Grupo de WhatsApp com nossa equipe para garantir velocidade no suporte, alinhamentos da estratégia e direcionamento."
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-300 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700/50 group-hover:border-blue-500/30 transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white font-display mb-1">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Investment Section */}
        <section className="flex flex-col gap-12">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-display text-3xl sm:text-4xl text-white font-bold mb-4">Investimento Mensal</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Uma parceria inteligente, desenhada para construir valor e trazer um retorno direto para o seu caixa.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900/50 border border-slate-800 p-8 sm:p-14 text-center max-w-2xl mx-auto shadow-2xl backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-6">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Condição Exclusiva
                </div>
              </div>
              
              <p className="text-slate-500 uppercase tracking-[0.2em] text-xs font-bold mb-8 mt-4 sm:mt-0">Condição do 1º Mês</p>
              
              <div className="flex flex-col items-center justify-center gap-2 mb-10">
                <span className="text-xl text-slate-500 line-through decoration-slate-500/50 decoration-2">
                  De R$ 2.200,00
                </span>
                <div className="flex items-start justify-center gap-1 mt-2">
                  <span className="text-2xl text-blue-400 font-medium mt-1">R$</span>
                  <span className="text-6xl sm:text-7xl font-display font-bold text-white tracking-tight">1.900</span>
                  <span className="text-2xl text-blue-400 font-medium mt-1">,00</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 max-w-sm mx-auto text-left border-t border-slate-800/80 pt-10">
                {['Direcionamento estratégico de marketing', 'Otimização de funil de vendas', 'Crescimento acompanhado'].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-slate-300 font-medium text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Bonus Section */}
        <section className="flex flex-col gap-6">
          <FadeIn>
            <div className="p-8 sm:p-10 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-inner">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shrink-0">
                <Gift className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-blue-400 mb-3 text-center sm:text-left tracking-tight">Bônus de Boas-Vindas</h3>
                <p className="text-slate-300 leading-relaxed font-light text-center sm:text-left">
                  Como forma de consolidar nosso compromisso de gerar resultados rapidamente,  
                  criaremos um <strong className="text-white font-medium">Site Institucional Profissional totalmente de brinde</strong> para que sua empresa tenha 
                  uma vitrine digital de alta performance desde o início de nossa parceria.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center sm:items-start gap-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-600/10 transition-colors duration-700" />
              <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-slate-700/50 shrink-0 relative z-10">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1.5 text-[10px] sm:text-xs font-semibold text-slate-300 tracking-wide uppercase mb-4 shadow-sm border border-slate-700">
                  Visão de Longo Prazo
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3 text-center sm:text-left tracking-tight">E-commerce de Alta Performance</h3>
                <p className="text-slate-400 leading-relaxed font-light text-center sm:text-left">
                  Mais do que uma agência, queremos ser seus parceiros de negócio. Mantendo o contrato até o segundo mês e fechando um compromisso semestral, 
                  entregaremos um <strong className="text-blue-300 font-medium">Site de Marketplace robusto (avaliado em R$ 2.500,00) como brinde adicional</strong>, preparando sua marca para as vendas diretas no digital.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#0B1120]">
        <div className="mx-auto max-w-4xl px-6 py-12 flex flex-col justify-center items-center gap-6">
          <div className="text-slate-300 font-display text-xl font-bold tracking-tight">
            Agência<span className="text-blue-500">.</span>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm font-light text-center uppercase tracking-widest">
            Apresentação comercial confidencial.
          </p>
        </div>
      </footer>
    </div>
  );
}


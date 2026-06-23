import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    slug: 'understanding-cyber-risk-for-smes',
    title: 'Understanding Cyber Risk for SMEs',
    category: 'Guides',
    date: 'March 10, 2026',
    author: 'Security Team',
    content: `
      Cybersecurity is no longer just an "enterprise problem." Today, small and medium-sized enterprises (SMEs) are increasingly targeted by cybercriminals because they often lack the robust defenses of larger organizations.

      In this guide, we explore the most common risks SMEs face, including phishing, ransomware, and insecure remote access. We also provide actionable steps to begin strengthening your security posture without requiring a massive budget.

      Key takeaways:
      - Why SMEs are prime targets for automated attacks.
      - The high cost of data breaches beyond just the immediate financial loss.
      - Simple, effective steps to improve employee security awareness.
    `
  },
  {
    slug: 'why-visibility-matters-before-security',
    title: 'Why Visibility Matters Before Security',
    category: 'Insights',
    date: 'March 12, 2026',
    author: 'Tech Lead',
    content: `
      You cannot protect what you cannot see. This fundamental principle is often overlooked in the rush to implement new security tools. True security starts with comprehensive visibility into your entire digital footprint.

      Visibility means knowing every asset, every user, and every data flow within your organization. Without this, security tools are just blind patches that may leave critical gaps exposed.

      In this article, we discuss:
      - The concept of "shadow IT" and how it creates hidden risks.
      - How to build a continuous asset discovery process.
      - Why a "visibility-first" approach saves time and money in the long run.
    `
  },
  {
    slug: 'common-security-gaps-in-growing-businesses',
    title: 'Common Security Gaps in Growing Businesses',
    category: 'Research',
    date: 'March 14, 2026',
    author: 'Research Analyst',
    content: `
      As businesses scale, their attack surface grows exponentially. Processes that worked for a team of five often break down when that team grows to fifty, creating dangerous security gaps.

      Our research has identified several recurring patterns in growing businesses, from over-privileged user accounts to inconsistent patch management across new departments.

      What we've found:
      - How rapid scaling often leads to "security debt."
      - The danger of legacy systems remaining connected to modern infrastructure.
      - Strategies for integrating security into the growth phase of your company.
    `
  }
];

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Post Not Found</h1>
        <Link href="/#resources" style={{ color: '#da1515f3', marginTop: '20px', display: 'inline-block' }}>
          Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <main style={{ padding: '120px 0 80px' }}>
      <div className="container" style={{ padding: '0 24px' }}>
        <Link 
          href="/#resources" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: '#64748b', 
            marginBottom: '40px',
            fontSize: '0.875rem',
            fontWeight: 600
          }}
        >
          <ArrowLeft size={16} />
          BACK TO RESOURCES
        </Link>

        <header style={{ marginBottom: '40px' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '4px 12px', 
            backgroundColor: '#fef2f2', 
            color: '#da1515f3', 
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            {post.category}
          </div>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            fontWeight: 900, 
            color: '#0f172a',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
            maxWidth: '900px'
          }}>
            {post.title}
          </h1>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '24px', 
            color: '#64748b',
            fontSize: '0.875rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={16} />
              {post.author}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} />
              {post.date}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Tag size={16} />
              {post.category}
            </div>
          </div>
        </header>

        <div style={{ 
          fontSize: '1.25rem', 
          lineHeight: 1.8, 
          color: '#334155',
          whiteSpace: 'pre-line',
          maxWidth: '1000px',
          marginBottom: '80px'
        }}>
          {post.content}
        </div>

        <div style={{ 
          padding: '80px 40px', 
          backgroundColor: '#0f172a', 
          color: 'white',
          borderRadius: '32px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: 'white' }}>
            Ready to secure your business?
          </h3>
          <p style={{ fontSize: '1.25rem', marginBottom: '40px', color: '#94a3b8', maxWidth: '600px', marginInline: 'auto' }}>
            Contact our experts today for a comprehensive security assessment tailored to your organization's needs.
          </p>
          <Link 
            href="/contact" 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#da1515f3', 
              color: 'white', 
              padding: '16px 40px', 
              borderRadius: '100px',
              fontWeight: 700,
              fontSize: '1.125rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(218, 21, 21, 0.3)'
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}

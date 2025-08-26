import jsPDF from 'jspdf';
import { personalInfo, resumeContent } from '../data/content.ts';

export const downloadResumeAsPdf = () => {
  const doc = new jsPDF('p', 'pt', 'a4');
  const margin = 40;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Define high-contrast colors for PDF
  const textColorPrimary = '#111827'; // Near black for titles
  const textColorSecondary = '#374151'; // Dark gray for body text
  const accentColor = '#06b6d4'; // Keep the cyan accent for name

  const addPageIfNeeded = (spaceNeeded: number) => {
    if (y + spaceNeeded > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  // --- Header ---
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(accentColor);
  doc.text(personalInfo.name, pageWidth / 2, y, { align: 'center' });
  y += 30;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColorSecondary);
  const contactInfo = [
    personalInfo.contact.location,
    personalInfo.contact.phone,
    personalInfo.contact.email,
    personalInfo.socials.linkedin.replace('https://', ''),
  ].join(' • ');
  doc.text(contactInfo, pageWidth / 2, y, { align: 'center' });
  y += 30;

  // --- Summary ---
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(textColorPrimary);
  doc.text('Software Developer', margin, y);
  y += 20;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(textColorSecondary); // Set text color for summary
  const summaryLines = doc.splitTextToSize(
    'Experienced Full‐Stack Software Developer with 5+ years of hands‐on experience designing, building, and deploying AI‐powered web applications. Expert in front-end (React, Vite, Tailwind CSS) and back-end (Node.js, Express.js, Next.js) technologies. Proven ability to integrate advanced AI models (GPT-4, Llama-3.1, Grok, Gemini) into existing products and to architect new AI‐driven solutions. Skilled at working in agile teams, optimizing performance, and delivering scalable cloud solutions.',
    contentWidth
  );
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 12 + 10;

  // --- Main Content ---
  const lines = resumeContent.split('\n');
  let isBulletList = false;

  const sectionHeaders = [
    'TECHNICAL SKILLS', 'PROFESSIONAL CERTIFICATIONS', 'PROFESSIONAL EXPERIENCE',
    'EDUCATION', 'PROJECT HIGHLIGHTS', 'ADDITIONAL INFORMATION', 'REFERENCES'
  ];

  lines.forEach(line => {
    line = line.trim();
    if (!line) return;

    addPageIfNeeded(20);

    const isSectionHeader = sectionHeaders.some(header => line.startsWith(header));
    
    if (isSectionHeader) {
      isBulletList = false;
      y += 15;
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(textColorPrimary);
      doc.text(line, margin, y);
      y += 10;
      doc.setDrawColor(textColorSecondary);
      doc.line(margin, y, pageWidth - margin, y);
      y += 15;
    } else if (line.startsWith('•')) {
      isBulletList = true;
      const bulletContent = line.substring(1).trim();
      const contentLines = doc.splitTextToSize(bulletContent, contentWidth - 20);
      addPageIfNeeded(contentLines.length * 12 + 5);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(textColorSecondary);
      doc.text('•', margin + 5, y);
      doc.text(contentLines, margin + 20, y);
      y += contentLines.length * 12 + 5;
    } else {
        // Handle company/role titles
        const isCompanyLine = line.includes('•') && line.includes('Present');
        const isPrevRoleLine = line.startsWith('Previous Roles');
        const isEducationLine = line.startsWith('B.Eng');
        const isReferenceName = line.match(/Engr\.|Ann|Lateef/);
        
        if (isCompanyLine || isPrevRoleLine || isEducationLine || isReferenceName) {
            isBulletList = false;
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(textColorPrimary);
            doc.text(line, margin, y);
            y += 15;
        } else { // Regular text, description, etc.
            const textLines = doc.splitTextToSize(line, isBulletList ? contentWidth - 20 : contentWidth);
            addPageIfNeeded(textLines.length * 12 + 5);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(textColorSecondary);
            doc.text(textLines, isBulletList ? margin + 20 : margin, y);
            y += textLines.length * 12 + 5;
        }
    }
  });

  doc.save('Chukwudifu_Okoroafor_Resume.pdf');
};

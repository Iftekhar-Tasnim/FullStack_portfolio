'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { personalInfo, skills, experience, education, certifications } from '@/data/personal';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-4">
                        {personalInfo.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <p className="text-lg opacity-90">Profile Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {personalInfo.name}
                </h2>
                <p className="text-xl text-gray-600 font-medium mb-4">
                  {personalInfo.title}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200">
                  <svg className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200">
                  <svg className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{personalInfo.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/portfolio"
                  className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-700 transition-colors text-center shadow-md hover:shadow-lg"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:border-gray-500 hover:text-gray-800 transition-colors text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {skillCategory.category}
                </h3>
                <div className="space-y-4">
                  {skillCategory.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className="bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Professional Experience</h2>
            <p className="text-lg text-gray-600">My journey in the tech industry</p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {job.position}
                    </h3>
                    <p className="text-xl text-gray-600 font-medium mb-2">
                      {job.company}
                    </p>
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                      {job.duration}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {job.description}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 mb-4">
                    {edu.duration}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Certifications</h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-500 mb-2">
                      {cert.date}
                    </p>
                    <p className="text-sm text-gray-600">
                      Credential ID: {cert.credential}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and create amazing digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get In Touch
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-800 transition-colors"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

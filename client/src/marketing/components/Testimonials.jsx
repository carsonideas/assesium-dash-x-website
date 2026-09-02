

// import React, { useState, useEffect } from 'react';

// const TestimonialVariant1 = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const testimonials = [
//     {
//       stars: 5,
//       quote: "Assesium cut our grading time in half without sacrificing fairness. The audit tools are outstanding.",
//       name: "Dr. Priya Mehta",
//       title: "Dept. Chair, Life Sciences",
//       image: "https://randomuser.me/api/portraits/women/44.jpg"
//     },
//     {
//       stars: 5,
//       quote: "The AI suggestions feel collaborative. I stay in control, but it removes repetitive work.",
//       name: "Samir Patel",
//       title: "Senior Lecturer, Humanities",
//       image: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//       stars: 5,
//       quote: "Integration with Canvas was painless. The transparency helps with student appeals.",
//       name: "Prof. Alison Grant",
//       title: "Program Director, Business",
//       image: "https://randomuser.me/api/portraits/women/68.jpg"
//     },
//     {
//       stars: 5,
//       quote: "Student feedback improved dramatically. They appreciate the detailed rubric transparency.",
//       name: "Dr. Marcus Chen",
//       title: "Associate Professor, Engineering",
//       image: "https://randomuser.me/api/portraits/men/85.jpg"
//     },
//     {
//       stars: 5,
//       quote: "Finally, a tool that understands academic integrity while saving us countless hours.",
//       name: "Prof. Sarah Williams",
//       title: "Head of Assessment, Arts",
//       image: "https://randomuser.me/api/portraits/women/21.jpg"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const getCardStyle = (index) => {
//     const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
//     if (diff === 0) {
//       return {
//         transform: 'translateY(0) scale(1)',
//         opacity: 1,
//         zIndex: 30
//       };
//     } else if (diff === 1 || diff === testimonials.length - 1) {
//       const isNext = diff === 1;
//       return {
//         transform: `translateY(${isNext ? '50%' : '-50%'}) scale(0.85)`,
//         opacity: 0.4,
//         zIndex: 10
//       };
//     } else {
//       return {
//         transform: 'translateY(0) scale(0.7)',
//         opacity: 0,
//         zIndex: 0
//       };
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mb-12 w-90"></p>
      
//       <div className="relative h-[200px] w-full max-w-sm flex items-center justify-center ">
//         {testimonials.map((testimonial, index) => (
//           <figure
//             key={index}
//             className="absolute w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 shadow-xl transition-all duration-700 ease-in-out"
//             style={getCardStyle(index)}
//           >
//             <div className="flex items-center gap-2 text-amber-500">
//               <span aria-hidden="true" className="text-sm">★★★★★</span>
//             </div>
//             <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
//               "{testimonial.quote}"
//             </blockquote>
//             <figcaption className="mt-4 flex items-center gap-3">
//               <img 
//                 src={testimonial.image} 
//                 alt={testimonial.name}
//                 className="h-8 w-8 rounded-full object-cover flex-shrink-0 ring-2 ring-zinc-200 dark:ring-zinc-700"
//               />
//               <div>
//                 <p className="text-xs font-medium text-zinc-900 dark:text-white">{testimonial.name}</p>
//                 <p className="text-xs text-zinc-500 dark:text-zinc-400">{testimonial.title}</p>
//               </div>
//             </figcaption>
//           </figure>
//         ))}
//       </div>

//       <div className="mt-6 flex justify-center gap-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === activeIndex 
//                 ? 'w-6 bg-blue-600' 
//                 : 'w-1.5 bg-zinc-300 dark:bg-zinc-700'
//             }`}
//             aria-label={`Go to testimonial ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const TestimonialVariant2 = () => {
//   const [activeIndex, setActiveIndex] = useState(1);

//   const testimonials = [
//     {
//       stars: 5,
//       quote: "Assesium cut our grading time in half without sacrificing fairness. The audit tools are outstanding.",
//       name: "Dr. Priya Mehta",
//       title: "Dept. Chair, Life Sciences",
//       image: "https://randomuser.me/api/portraits/women/44.jpg"
//     },
//     {
//       stars: 5,
//       quote: "The AI suggestions feel collaborative. I stay in control, but it removes repetitive work.",
//       name: "Samir Patel",
//       title: "Senior Lecturer, Humanities",
//       image: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//       stars: 5,
//       quote: "Integration with Canvas was painless. The transparency helps with student appeals.",
//       name: "Prof. Alison Grant",
//       title: "Program Director, Business",
//       image: "https://randomuser.me/api/portraits/women/68.jpg"
//     },
//     {
//       stars: 5,
//       quote: "Student feedback improved dramatically. They appreciate the detailed rubric transparency.",
//       name: "Dr. Marcus Chen",
//       title: "Associate Professor, Engineering",
//       image: "https://randomuser.me/api/portraits/men/85.jpg"
//     },
//     {
//       stars: 5,
//       quote: "Finally, a tool that understands academic integrity while saving us countless hours.",
//       name: "Prof. Sarah Williams",
//       title: "Head of Assessment, Arts",
//       image: "https://randomuser.me/api/portraits/women/21.jpg"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const getCardStyle = (index) => {
//     const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
//     if (diff === 0) {
//       return {
//         transform: 'translateX(0) scale(1) rotateY(0deg)',
//         opacity: 1,
//         zIndex: 30
//       };
//     } else if (diff === 1) {
//       return {
//         transform: 'translateX(40%) scale(0.85) rotateY(-15deg)',
//         opacity: 0.5,
//         zIndex: 10
//       };
//     } else if (diff === testimonials.length - 1) {
//       return {
//         transform: 'translateX(-40%) scale(0.85) rotateY(15deg)',
//         opacity: 0.5,
//         zIndex: 10
//       };
//     } else {
//       return {
//         transform: 'translateX(0) scale(0.7)',
//         opacity: 0,
//         zIndex: 0
//       };
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mb-12 w-70"></p>
      
//       <div className="relative h-[200px] w-full max-w-sm flex items-center justify-center" style={{ perspective: '1000px' }}>
//         {testimonials.map((testimonial, index) => (
//           <figure
//             key={index}
//             className="absolute w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 shadow-xl transition-all duration-700 ease-in-out"
//             style={getCardStyle(index)}
//           >
//             <div className="flex items-center gap-2 text-amber-500">
//               <span aria-hidden="true" className="text-sm">★★★★★</span>
//             </div>
//             <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
//               "{testimonial.quote}"
//             </blockquote>
//             <figcaption className="mt-4 flex items-center gap-3">
//               <img 
//                 src={testimonial.image} 
//                 alt={testimonial.name}
//                 className="h-8 w-8 rounded-full object-cover flex-shrink-0 ring-2 ring-zinc-200 dark:ring-zinc-700"
//               />
//               <div>
//                 <p className="text-xs font-medium text-zinc-900 dark:text-white">{testimonial.name}</p>
//                 <p className="text-xs text-zinc-500 dark:text-zinc-400">{testimonial.title}</p>
//               </div>
//             </figcaption>
//           </figure>
//         ))}
//       </div>

//       <div className="mt-6 flex justify-center gap-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === activeIndex 
//                 ? 'w-6 bg-blue-600' 
//                 : 'w-1.5 bg-zinc-300 dark:bg-zinc-700'
//             }`}
//             aria-label={`Go to testimonial ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const TestimonialVariant3 = () => {
//   const [activeIndex, setActiveIndex] = useState(2);

//   const testimonials = [
//     {
//       stars: 5,
//       quote: "Assesium cut our grading time in half without sacrificing fairness. The audit tools are outstanding.",
//       name: "Dr. Priya Mehta",
//       title: "Dept. Chair, Life Sciences",
//       image: "https://randomuser.me/api/portraits/women/44.jpg"
//     },
//     {
//       stars: 5,
//       quote: "The AI suggestions feel collaborative. I stay in control, but it removes repetitive work.",
//       name: "Samir Patel",
//       title: "Senior Lecturer, Humanities",
//       image: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//       stars: 5,
//       quote: "Integration with Canvas was painless. The transparency helps with student appeals.",
//       name: "Prof. Alison Grant",
//       title: "Program Director, Business",
//       image: "https://randomuser.me/api/portraits/women/68.jpg"
//     },
//     {
//       stars: 5,
//       quote: "Student feedback improved dramatically. They appreciate the detailed rubric transparency.",
//       name: "Dr. Marcus Chen",
//       title: "Associate Professor, Engineering",
//       image: "https://randomuser.me/api/portraits/men/85.jpg"
//     },
//     {
//       stars: 5,
//       quote: "Finally, a tool that understands academic integrity while saving us countless hours.",
//       name: "Prof. Sarah Williams",
//       title: "Head of Assessment, Arts",
//       image: "https://randomuser.me/api/portraits/women/21.jpg"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const getCardStyle = (index) => {
//     const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
//     if (diff === 0) {
//       return {
//         transform: 'translateY(0) scale(1)',
//         opacity: 1,
//         zIndex: 30
//       };
//     } else if (diff === 1 || diff === testimonials.length - 1) {
//       const isNext = diff === 1;
//       return {
//         transform: `translateY(${isNext ? '50%' : '-50%'}) scale(0.85)`,
//         opacity: 0.4,
//         zIndex: 10
//       };
//     } else {
//       return {
//         transform: 'translateY(0) scale(0.7)',
//         opacity: 0,
//         zIndex: 0
//       };
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mb-12 w-90"></p>
      
//       <div className="relative h-[200px] w-full max-w-sm flex items-center justify-center">
//         {testimonials.map((testimonial, index) => (
//           <figure
//             key={index}
//             className="absolute w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 shadow-xl transition-all duration-700 ease-in-out"
//             style={getCardStyle(index)}
//           >
//             <div className="flex items-center gap-2 text-amber-500">
//               <span aria-hidden="true" className="text-sm">★★★★★</span>
//             </div>
//             <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
//               "{testimonial.quote}"
//             </blockquote>
//             <figcaption className="mt-4 flex items-center gap-3">
//               <img 
//                 src={testimonial.image} 
//                 alt={testimonial.name}
//                 className="h-8 w-8 rounded-full object-cover flex-shrink-0 ring-2 ring-zinc-200 dark:ring-zinc-700"
//               />
//               <div>
//                 <p className="text-xs font-medium text-zinc-900 dark:text-white">{testimonial.name}</p>
//                 <p className="text-xs text-zinc-500 dark:text-zinc-400">{testimonial.title}</p>
//               </div>
//             </figcaption>
//           </figure>
//         ))}
//       </div>

//       <div className="mt-6 flex justify-center gap-2">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`h-1.5 rounded-full transition-all duration-300 ${
//               index === activeIndex 
//                 ? 'w-6 bg-blue-600' 
//                 : 'w-1.5 bg-zinc-300 dark:bg-zinc-700'
//             }`}
//             aria-label={`Go to testimonial ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const Testimonials = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 py-36 px-4">
//       <div className="mx-auto w-full max-w-7xl min-w-0">
//         <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
//           Testimonials
//         </h1>
//         <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
//           Review by institutions, teachers, students and parents
//         </p>
        
//         <div className="flex flex-row items-start justify-between gap-4 w-full">
//           <TestimonialVariant1 />
//           <TestimonialVariant2 />
//           <TestimonialVariant3 />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect } from 'react';

const TestimonialVariant1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      stars: 5,
      quote: "Assesium cut our grading time in half without sacrificing fairness. The audit tools are outstanding.",
      name: "Dr. Priya Mehta",
      title: "Dept. Chair, Life Sciences",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      stars: 5,
      quote: "The AI suggestions feel collaborative. I stay in control, but it removes repetitive work.",
      name: "Samir Patel",
      title: "Senior Lecturer, Humanities",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      stars: 5,
      quote: "Integration with Canvas was painless. The transparency helps with student appeals.",
      name: "Prof. Alison Grant",
      title: "Program Director, Business",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      stars: 5,
      quote: "Student feedback improved dramatically. They appreciate the detailed rubric transparency.",
      name: "Dr. Marcus Chen",
      title: "Associate Professor, Engineering",
      image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      stars: 5,
      quote: "Finally, a tool that understands academic integrity while saving us countless hours.",
      name: "Prof. Sarah Williams",
      title: "Head of Assessment, Arts",
      image: "https://randomuser.me/api/portraits/women/21.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
    if (diff === 0) {
      return {
        transform: 'translateY(0) scale(1)',
        opacity: 1,
        zIndex: 30
      };
    } else if (diff === 1 || diff === testimonials.length - 1) {
      const isNext = diff === 1;
      return {
        transform: `translateY(${isNext ? '50%' : '-50%'}) scale(0.85)`,
        opacity: 0.4,
        zIndex: 10
      };
    } else {
      return {
        transform: 'translateY(0) scale(0.7)',
        opacity: 0,
        zIndex: 0
      };
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mb-12 w-90"></p>
      
      <div className="relative h-[200px] w-full max-w-sm flex items-center justify-center ">
        {testimonials.map((testimonial, index) => (
          <figure
            key={index}
            className="absolute w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 shadow-xl transition-all duration-700 ease-in-out"
            style={getCardStyle(index)}
          >
            <div className="flex items-center gap-2 text-amber-500">
              <span aria-hidden="true" className="text-sm">★★★★★</span>
            </div>
            <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="h-8 w-8 rounded-full object-cover flex-shrink-0 ring-2 ring-zinc-200 dark:ring-zinc-700"
              />
              <div>
                <p className="text-xs font-medium text-zinc-900 dark:text-white">{testimonial.name}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{testimonial.title}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'w-6 bg-blue-600' 
                : 'w-1.5 bg-zinc-300 dark:bg-zinc-700'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialVariant2 = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = [
    {
      stars: 5,
      quote: "Assesium cut our grading time in half without sacrificing fairness. The audit tools are outstanding.",
      name: "Dr. Priya Mehta",
      title: "Dept. Chair, Life Sciences",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      stars: 5,
      quote: "The AI suggestions feel collaborative. I stay in control, but it removes repetitive work.",
      name: "Samir Patel",
      title: "Senior Lecturer, Humanities",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      stars: 5,
      quote: "Integration with Canvas was painless. The transparency helps with student appeals.",
      name: "Prof. Alison Grant",
      title: "Program Director, Business",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      stars: 5,
      quote: "Student feedback improved dramatically. They appreciate the detailed rubric transparency.",
      name: "Dr. Marcus Chen",
      title: "Associate Professor, Engineering",
      image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      stars: 5,
      quote: "Finally, a tool that understands academic integrity while saving us countless hours.",
      name: "Prof. Sarah Williams",
      title: "Head of Assessment, Arts",
      image: "https://randomuser.me/api/portraits/women/21.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
    if (diff === 0) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        opacity: 1,
        zIndex: 30
      };
    } else if (diff === 1) {
      return {
        transform: 'translateX(40%) scale(0.85) rotateY(-15deg)',
        opacity: 0.5,
        zIndex: 10
      };
    } else if (diff === testimonials.length - 1) {
      return {
        transform: 'translateX(-40%) scale(0.85) rotateY(15deg)',
        opacity: 0.5,
        zIndex: 10
      };
    } else {
      return {
        transform: 'translateX(0) scale(0.7)',
        opacity: 0,
        zIndex: 0
      };
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mb-12 w-70"></p>
      
      <div className="relative h-[200px] w-full max-w-sm flex items-center justify-center" style={{ perspective: '1000px' }}>
        {testimonials.map((testimonial, index) => (
          <figure
            key={index}
            className="absolute w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 shadow-xl transition-all duration-700 ease-in-out"
            style={getCardStyle(index)}
          >
            <div className="flex items-center gap-2 text-amber-500">
              <span aria-hidden="true" className="text-sm">★★★★★</span>
            </div>
            <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="h-8 w-8 rounded-full object-cover flex-shrink-0 ring-2 ring-zinc-200 dark:ring-zinc-700"
              />
              <div>
                <p className="text-xs font-medium text-zinc-900 dark:text-white">{testimonial.name}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{testimonial.title}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'w-6 bg-blue-600' 
                : 'w-1.5 bg-zinc-300 dark:bg-zinc-700'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TestimonialVariant3 = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const testimonials = [
    {
      stars: 5,
      quote: "Assesium cut our grading time in half without sacrificing fairness. The audit tools are outstanding.",
      name: "Dr. Priya Mehta",
      title: "Dept. Chair, Life Sciences",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      stars: 5,
      quote: "The AI suggestions feel collaborative. I stay in control, but it removes repetitive work.",
      name: "Samir Patel",
      title: "Senior Lecturer, Humanities",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      stars: 5,
      quote: "Integration with Canvas was painless. The transparency helps with student appeals.",
      name: "Prof. Alison Grant",
      title: "Program Director, Business",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      stars: 5,
      quote: "Student feedback improved dramatically. They appreciate the detailed rubric transparency.",
      name: "Dr. Marcus Chen",
      title: "Associate Professor, Engineering",
      image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      stars: 5,
      quote: "Finally, a tool that understands academic integrity while saving us countless hours.",
      name: "Prof. Sarah Williams",
      title: "Head of Assessment, Arts",
      image: "https://randomuser.me/api/portraits/women/21.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
    if (diff === 0) {
      return {
        transform: 'translateY(0) scale(1)',
        opacity: 1,
        zIndex: 30
      };
    } else if (diff === 1 || diff === testimonials.length - 1) {
      const isNext = diff === 1;
      return {
        transform: `translateY(${isNext ? '50%' : '-50%'}) scale(0.85)`,
        opacity: 0.4,
        zIndex: 10
      };
    } else {
      return {
        transform: 'translateY(0) scale(0.7)',
        opacity: 0,
        zIndex: 0
      };
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mb-12 w-90"></p>
      
      <div className="relative h-[200px] w-full max-w-sm flex items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <figure
            key={index}
            className="absolute w-full max-w-sm rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-5 shadow-xl transition-all duration-700 ease-in-out"
            style={getCardStyle(index)}
          >
            <div className="flex items-center gap-2 text-amber-500">
              <span aria-hidden="true" className="text-sm">★★★★★</span>
            </div>
            <blockquote className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              "{testimonial.quote}"
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="h-8 w-8 rounded-full object-cover flex-shrink-0 ring-2 ring-zinc-200 dark:ring-zinc-700"
              />
              <div>
                <p className="text-xs font-medium text-zinc-900 dark:text-white">{testimonial.name}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{testimonial.title}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'w-6 bg-blue-600' 
                : 'w-1.5 bg-zinc-300 dark:bg-zinc-700'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="home-section home-testimonials-section min-w-0 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 py-16 md:py-24 px-4">
      <div className="mx-auto w-full max-w-7xl min-w-0">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 md:mb-12 text-zinc-900 dark:text-white">
          Testimonials
        </h1>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-8 md:mb-12 px-4">
          Review by institutions, teachers, students and parents
        </p>
        
        <div className="flex w-full min-w-0 flex-col items-center justify-center gap-10 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="w-full min-w-0 md:w-1/3">
            <TestimonialVariant1 />
          </div>
          <div className="w-full min-w-0 md:w-1/3">
            <TestimonialVariant2 />
          </div>
          <div className="w-full min-w-0 md:w-1/3">
            <TestimonialVariant3 />
          </div>
        </div>
        
        <div className="mt-6 text-center md:hidden">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {/* Swipe or use dots to navigate each testimonial carousel */}
          </p>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;
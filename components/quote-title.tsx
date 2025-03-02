'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/bg-illustration.svg'

interface QuoteTitleProps {
  title: string
  date: string
}

export default function QuoteTitle({
  title,
  date,
}: QuoteTitleProps) {
  const [currentPhrase, setCurrentPhrase] = useState<string>('at Scale');
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [currentText, setCurrentText] = useState<string>('at Scale');
  const particlesRef = useRef<HTMLDivElement>(null);
  const codeDisplayRef = useRef<HTMLDivElement>(null);
  

  
  // Phrases to cycle through
  const phrases = [
    'at Scale',
    '1-shotting OPs',
    'for Etched',
    'for Websites',
    'for Codebases',
    'in Production',
    'for Mercor',
    'for Cognition'
  ];
  
  // Generate code solutions with typing effect
  useEffect(() => {
    // Python Two Sum solution code (final state)
    const pythonTwoSumSolution = [
      'class Solution:',
      '    def twoSum(self, nums: List[int], target: int) -> List[int]:',
      '        hashmap = {}',
      '        for i in range(len(nums)):',
      '            complement = target - nums[i]',
      '            if complement in hashmap:',
      '                return [i, hashmap[complement]]',
      '            hashmap[nums[i]] = i',
      '        # Return an empty list if no solution is found',
      '        return []',
      '',
      '    # Brute force approach - O(n²) time complexity',
      '    def twoSumBruteForce(self, nums: List[int], target: int) -> List[int]:',
      '        n = len(nums)',
      '        for i in range(n):',
      '            for j in range(i + 1, n):',
      '                if nums[i] + nums[j] == target:',
      '                    return [i, j]',
      '        return []',
      '',
      '    # Two-pass hash table approach',
      '    def twoSumTwoPass(self, nums: List[int], target: int) -> List[int]:',
      '        hashmap = {nums[i]: i for i in range(len(nums))}',
      '        for i in range(len(nums)):',
      '            complement = target - nums[i]',
      '            if complement in hashmap and hashmap[complement] != i:',
      '                return [i, hashmap[complement]]',
      '        return []',
    ];
    
    // Python Merge Sorted Array solution code
    const pythonMergeSolution = [
      'class Solution(object):',
      '    def merge(self, nums1, m, nums2, n):',
      '        if n == 0 :return',
      '        len1 = len(nums1)',
      '        end_idx = len1-1',
      '        while n > 0 and m > 0 :',
      '            if nums2[n-1] >= nums1[m-1]:',
      '                nums1[end_idx] = nums2[n-1]',
      '                n-=1',
      '            else:',
      '                nums1[end_idx] = nums1[m-1]',
      '                m-=1',
      '            end_idx-=1',
      '        while n > 0:',
      '            nums1[end_idx] = nums2[n-1]',
      '            n-=1',
      '            end_idx-=1',
      '        # The merge is now complete',
      '        # Time complexity: O(m+n)',
      '        # Space complexity: O(1)',
      '        return nums1',
      '',
      '    def merge_alternative(self, nums1, m, nums2, n):',
      '        # Another implementation using Python slicing',
      '        nums1[m:] = nums2[:n]',
      '        nums1.sort()',
      '        return nums1',
    ];
    
    // Generate completely random gibberish with no structure preservation
    const generateRandomGibberish = (finalCode: string[]) => {
      return finalCode.map(line => {
        // Keep indentation
        const indentation = line.match(/^\s*/) ? line.match(/^\s*/)![0] : '';
        const lineWithoutIndent = line.trimStart();
        
        // Generate random characters of the same length as the original line
        const randomChars = Array.from({ length: lineWithoutIndent.length }, () => {
          const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/'
          return chars.charAt(Math.floor(Math.random() * chars.length));
        }).join('');
        
        return indentation + randomChars;
      });
    };
    
    // Generate partially revealed solutions (revealing from left to right)
    const generatePartialSolutions = (finalCode: string[]) => {
      const stages = [];
      
      // First generate 8 completely random stages
      for (let i = 0; i < 8; i++) {
        stages.push(generateRandomGibberish(finalCode));
      }
      
      // Then generate 10 stages that gradually reveal the solution from left to right
      const numRevealStages = 10;
      for (let stage = 1; stage <= numRevealStages; stage++) {
        const revealRatio = stage / numRevealStages;
        
        stages.push(finalCode.map((line: string) => {
          const indentation = line.match(/^\s*/) ? line.match(/^\s*/)![0] : '';
          const lineWithoutIndent = line.trimStart();
          
          // Calculate how many characters to reveal from the left
          const revealCount = Math.floor(lineWithoutIndent.length * revealRatio);
          
          // Get the revealed part from the actual solution
          const revealedPart = lineWithoutIndent.substring(0, revealCount);
          
          // Generate random characters for the rest
          const randomPart = Array.from({ length: lineWithoutIndent.length - revealCount }, () => {
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/'
            return chars.charAt(Math.floor(Math.random() * chars.length));
          }).join('');
          
          return indentation + revealedPart + randomPart;
        }));
      }
      
      // Finally add the complete solution
      stages.push(finalCode);
      
      return stages;
    };
    
    
    // Generate all stages with left-to-right reveal
    const allRandomStages = generatePartialSolutions(pythonTwoSumSolution);

    // Function to create and setup the code display
    const setupCodeDisplay = (solutionType = 'twoSum') => {
      // Try to get the code display element from the global window object
      const codeContainer = typeof window !== 'undefined' && (window as any).codeDisplayElement ? 
        (window as any).codeDisplayElement : codeDisplayRef.current;
      
      if (!codeContainer) return;

      // Get or create the main container
      let mainContainer = codeContainer.querySelector('.main-container') as HTMLElement;
      if (!mainContainer) {
        codeContainer.innerHTML = '';
        
        // Create main container with some padding
        mainContainer = document.createElement('div');
        mainContainer.className = 'main-container p-4 pt-4 flex flex-col items-center justify-center h-screen w-full overflow-hidden gap-2';
        
        // Add main container to code container
        codeContainer.appendChild(mainContainer);
      }
      
      // Check if the requested code block already exists
      const existingCodeBlock = mainContainer.querySelector(`.${solutionType}-code-block`);
      if (existingCodeBlock) {
        return existingCodeBlock.querySelector('.code-content');
      }
      
      // Create a code block container with styling
      const codeBlock = document.createElement('div');
      codeBlock.className = `${solutionType}-code-block font-mono text-sm bg-slate-900 rounded-xl shadow-xl overflow-hidden w-[650px] mb-4 min-h-[250px]`;
      codeBlock.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.4)';
      
      // Create the header with traffic light dots
      const headerElement = document.createElement('div');
      headerElement.className = 'bg-slate-800 px-3 py-2 flex items-center border-b border-slate-700';
      
      // Create traffic light dots container
      const dotsContainer = document.createElement('div');
      dotsContainer.className = 'flex space-x-2';
      
      // Create red dot
      const redDot = document.createElement('div');
      redDot.className = 'w-3 h-3 rounded-full bg-red-500';
      dotsContainer.appendChild(redDot);
      
      // Create yellow dot
      const yellowDot = document.createElement('div');
      yellowDot.className = 'w-3 h-3 rounded-full bg-yellow-500';
      dotsContainer.appendChild(yellowDot);
      
      // Create green dot
      const greenDot = document.createElement('div');
      greenDot.className = 'w-3 h-3 rounded-full bg-green-500';
      dotsContainer.appendChild(greenDot);
      
      // Add title next to dots
      const titleElement = document.createElement('div');
      titleElement.className = 'ml-4 text-blue-300 font-semibold code-title';
      titleElement.textContent = solutionType === 'twoSum' ? 'Two Sum Solution (Python)' : 'Merge Sorted Array (Python)';
      
      // Append dots and title to header
      headerElement.appendChild(dotsContainer);
      headerElement.appendChild(titleElement);
      
      // Add header to code block
      codeBlock.appendChild(headerElement);
      
      // Create content container with padding
      const contentContainer = document.createElement('div');
      contentContainer.className = 'p-4 bg-[#1E2030] code-content overflow-auto max-h-[300px]';
      contentContainer.style.fontFamily = 'Menlo, Monaco, Consolas, "Courier New", monospace';
      
      // Add content container to code block
      codeBlock.appendChild(contentContainer);
      
      // Add code block to main container
      mainContainer.appendChild(codeBlock);
      
      return contentContainer;
    };


    // Function to highlight Python code syntax
    const highlightPythonCode = (text: string) => {
      // First escape HTML special characters
      let html = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      
      // Python keywords
      const keywords = ['class', 'def', 'for', 'if', 'in', 'return', 'self', 'range', 'len'];
      const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
      
      // Create spans with appropriate classes
      html = html
        // Handle comments
        .replace(/(#.*$)/g, '<span style="color: #6B7280;">$1</span>')
        // Handle keywords
        .replace(keywordRegex, '<span style="color: #A78BFA;">$1</span>')
        // Handle function calls
        .replace(/(\w+)\(/g, '<span style="color: #60A5FA;">$1</span>(')
        // Handle numbers
        .replace(/\b(\d+)\b/g, '<span style="color: #FBBF24;">$1</span>')
        // Handle strings
        .replace(/(["'])(.*?)\1/g, '<span style="color: #F97316;">$1$2$1</span>')
        // Handle type hints
        .replace(/([A-Z]\w+)(?=\[|\]|:|,)/g, '<span style="color: #60A5FA;">$1</span>')
        // Handle brackets and parentheses
        .replace(/([\[\]{}()])/g, '<span style="color: #FBBF24;">$1</span>')
        // Handle operators
        .replace(/([=+\-*\/&|!<>])/g, '<span style="color: #EC4899;">$1</span>');
      
      return html;
    };

    // Function to display code with super fast gibberish transformation
    const displayFastGibberishTransformation = async (solutionType = 'twoSum') => {
      // Select the solution and stages based on the solution type
      const solution = solutionType === 'twoSum' ? pythonTwoSumSolution : pythonMergeSolution;
      
      // Generate stages for the selected solution
      const stages = generatePartialSolutions(solution);
      
      // Get the appropriate container
      const contentContainer = setupCodeDisplay(solutionType);
      if (!contentContainer) return;
      
      // Clear previous content
      contentContainer.innerHTML = '';
      
      // Create line containers for each line of code
      const lineContainers = [];
      for (let i = 0; i < solution.length; i++) {
        const lineContainer = document.createElement('div');
        lineContainer.className = 'line-container flex mb-1';
        
        // Add line number
        const lineNumber = document.createElement('div');
        lineNumber.className = 'line-number w-8 text-right pr-3 text-slate-500 select-none';
        lineNumber.textContent = (i + 1).toString();
        lineContainer.appendChild(lineNumber);
        
        // Add code line container
        const codeLine = document.createElement('pre');
        codeLine.className = 'code-line flex-1 font-mono';
        codeLine.style.margin = '0';
        codeLine.style.fontFamily = 'Menlo, Monaco, Consolas, "Courier New", monospace';
        lineContainer.appendChild(codeLine);
        
        // Add the line container to the content container
        contentContainer.appendChild(lineContainer);
        lineContainers.push({ container: lineContainer, codeLine });
      }
      
      // Go through each stage of the transformation
      for (let stage = 0; stage < stages.length; stage++) {
        // For each line in the current stage
        for (let i = 0; i < stages[stage].length; i++) {
          if (i < lineContainers.length) {
            const line = stages[stage][i];
            // For the final stage (the actual solution), use simple color coding
            if (stage === stages.length - 1) {
              // Apply simple color styling for the final solution
              lineContainers[i].codeLine.textContent = line;
              lineContainers[i].codeLine.style.color = '#A8C5E9'; // Light blue for code
              
              // Apply specific colors for keywords
              if (line.includes('class') || line.includes('def') || 
                  line.includes('for') || line.includes('if') || 
                  line.includes('in') || line.includes('return')) {
                lineContainers[i].codeLine.style.color = '#C792EA'; // Purple for keywords
              }
              
              // Apply specific colors for comments
              if (line.includes('#')) {
                lineContainers[i].codeLine.style.color = '#676E95'; // Gray for comments
              }
            } else {
              // For gibberish stages, just set the text content
              lineContainers[i].codeLine.textContent = line;
              lineContainers[i].codeLine.style.color = '#A8C5E9'; // Light blue for gibberish
            }
          }
        }
        
        // Super fast transitions for gibberish stages, then stay on final solution
        const delay = stage === stages.length - 1 ? 999999 : 50; // 50ms for transitions, then stay indefinitely
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    };
    
    // Start the animations with a slight delay between them
    setTimeout(() => {
      // Display Two Sum solution first
      displayFastGibberishTransformation('twoSum');
      
      // Display Merge solution after a short delay
      setTimeout(() => {
        displayFastGibberishTransformation('merge');
      }, 500);
    }, 500);
    
    // No cleanup needed
    return () => {};
  }, []);
  
  // Create animated particles in the background
  useEffect(() => {
    if (particlesRef.current) {
      const particlesContainer = particlesRef.current;
      const numberOfParticles = 50;
      
      // Clear any existing particles
      particlesContainer.innerHTML = '';
      
      for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 5 + 2;
        
        particle.className = 'absolute rounded-full bg-blue-500/30 animate-float';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
      }
    }
  }, []);
  
  // Create refs to store animation state without triggering re-renders
  const typingRef = useRef({
    currentIndex: 0,
    isDeleting: false,
    text: phrases[0],
    typingSpeed: 150, // Even slower initial typing speed
    timer: null as NodeJS.Timeout | null
  });
  
  // Handle phrase cycling with typing effect
  useEffect(() => {
    // Blink cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    // Function to handle the typing animation
    const handleTyping = () => {
      const state = typingRef.current;
      // Get current phrase
      const fullPhrase = phrases[state.currentIndex];
      
      // Set typing speed based on whether we're deleting or typing
      state.typingSpeed = state.isDeleting ? 80 : 150; // Even slower typing speeds
      
      // If deleting, remove a character, otherwise add a character
      if (state.isDeleting) {
        state.text = fullPhrase.substring(0, state.text.length - 1);
      } else {
        state.text = fullPhrase.substring(0, state.text.length + 1);
      }
      
      // Update the displayed text
      setCurrentText(state.text);
      
      // Determine next steps based on current state
      if (!state.isDeleting && state.text === fullPhrase) {
        // Finished typing the full phrase, wait before deleting
        state.typingSpeed = 2000; // Longer pause (2 seconds) at the end of the phrase
        state.isDeleting = true;
      } else if (state.isDeleting && state.text === '') {
        // Finished deleting, move to next phrase
        state.isDeleting = false;
        state.currentIndex = (state.currentIndex + 1) % phrases.length;
        setCurrentPhrase(phrases[state.currentIndex]);
      }
      
      // Schedule the next update
      state.timer = setTimeout(handleTyping, state.typingSpeed);
    };
    
    // Start the typing animation
    typingRef.current.timer = setTimeout(handleTyping, 1000);
    
    // Cleanup function
    return () => {
      clearInterval(cursorInterval);
      if (typingRef.current.timer) {
        clearTimeout(typingRef.current.timer);
      }
    };
  }, []); // Empty dependency array
  
  return (
    <div className="relative w-full lg:w-1/2 bg-white h-screen flex items-center justify-center overflow-hidden">
      <div className="relative bg-slate-900 rounded-[3rem] w-[93%] h-[90%] overflow-hidden">
        {/* Animated Particles */}
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none z-10"></div>

        {/* Background Illustration */}
        <div className="absolute top-1/2 left-1/2 blur-3xl pointer-events-none animate-gradient z-0" aria-hidden="true">
          <Image className="max-w-none" src={Illustration} width={785} height={685} alt="Bg illustration" />
        </div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        <div className="min-h-full w-full max-w-xl mx-auto flex flex-col justify-center px-4 sm:px-6 z-20 relative h-full">
          <div className="flex flex-col">
            <div className="space-y-2">
            <div className="font-caveat text-3xl text-blue-500 animate-enter">Team Seaside</div>
            
            <div className="font-orbiter font-bold h1 bg-gradient-to-b from-white to-blue-500 bg-clip-text text-transparent">
              <div className="text-6xl md:text-7xl leading-tight">
                Speculative
              </div>
              <div className="text-6xl md:text-7xl leading-tight">
                Decoding
              </div>
              <div className="text-6xl md:text-7xl leading-tight flex items-center">
                <span>with Diffusion</span>
              </div>
              <div className="text-6xl md:text-7xl leading-tight">
                <span>LLMs</span>
              </div>
              <div className="text-6xl md:text-7xl leading-tight flex items-center">
                <div className="relative inline-flex items-center min-w-[300px]">
                  <span className="text-blue-400">{currentText}</span>
                  <span className={`h-12 w-4 bg-blue-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ml-1`}></span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 mt-auto pt-8">
              <time className="block font-orbiter text-xl text-slate-400 animate-enter-delay-100">
                {'Built for the 2025 Mercor x Cognition x Etched Hackathon'}
              </time>
              <time className="block font-orbiter text-l text-slate-600 animate-enter-delay-200">{date}</time>
            </div>
            

            </div>
          </div>
        </div>
        
        {/* About Button */}
        <div className="absolute bottom-8 right-8 z-30">
          <Link href="/about" className="group flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <span className="sr-only">About</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

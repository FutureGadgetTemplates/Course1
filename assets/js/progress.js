/**
 * Course Progress Tracking
 * Uses localStorage to track lesson completion
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'course_progress';

  // Get all progress data from localStorage
  function getProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.error('Error reading progress:', e);
      return {};
    }
  }

  // Save progress data to localStorage
  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Error saving progress:', e);
    }
  }

  // Check if a lesson is complete
  function isLessonComplete(courseSlug, lessonSlug) {
    const progress = getProgress();
    const key = courseSlug + ':' + lessonSlug;
    return progress[key] === true;
  }

  // Mark a lesson as complete
  function markLessonComplete(courseSlug, lessonSlug) {
    const progress = getProgress();
    const key = courseSlug + ':' + lessonSlug;
    progress[key] = true;
    saveProgress(progress);
  }

  // Mark a lesson as incomplete
  function markLessonIncomplete(courseSlug, lessonSlug) {
    const progress = getProgress();
    const key = courseSlug + ':' + lessonSlug;
    delete progress[key];
    saveProgress(progress);
  }

  // Toggle lesson completion
  function toggleLessonComplete(courseSlug, lessonSlug) {
    if (isLessonComplete(courseSlug, lessonSlug)) {
      markLessonIncomplete(courseSlug, lessonSlug);
      return false;
    } else {
      markLessonComplete(courseSlug, lessonSlug);
      return true;
    }
  }

  // Calculate progress percentage for a course
  function calculateCourseProgress(courseSlug) {
    const progress = getProgress();
    const checkboxes = document.querySelectorAll('[data-course="' + courseSlug + '"][data-lesson]');

    if (checkboxes.length === 0) return 0;

    let completed = 0;
    checkboxes.forEach(function(el) {
      const lessonSlug = el.getAttribute('data-lesson');
      if (lessonSlug && isLessonComplete(courseSlug, lessonSlug)) {
        completed++;
      }
    });

    // Count unique lessons
    const uniqueLessons = new Set();
    checkboxes.forEach(function(el) {
      const lessonSlug = el.getAttribute('data-lesson');
      if (lessonSlug) uniqueLessons.add(lessonSlug);
    });

    const total = uniqueLessons.size;
    if (total === 0) return 0;

    // Recount completed based on unique lessons
    completed = 0;
    uniqueLessons.forEach(function(lessonSlug) {
      if (isLessonComplete(courseSlug, lessonSlug)) {
        completed++;
      }
    });

    return Math.round((completed / total) * 100);
  }

  // Update all UI elements to reflect current progress
  function updateUI() {
    // Update all lesson checkboxes
    const checkboxes = document.querySelectorAll('[data-course][data-lesson]');
    checkboxes.forEach(function(el) {
      const courseSlug = el.getAttribute('data-course');
      const lessonSlug = el.getAttribute('data-lesson');

      if (courseSlug && lessonSlug) {
        if (isLessonComplete(courseSlug, lessonSlug)) {
          el.classList.add('is-complete');
        } else {
          el.classList.remove('is-complete');
        }
      }
    });

    // Update all progress bars
    const progressBars = document.querySelectorAll('.progress-bar[data-course]');
    progressBars.forEach(function(bar) {
      const courseSlug = bar.getAttribute('data-course');
      if (courseSlug) {
        const percentage = calculateCourseProgress(courseSlug);
        const fill = bar.querySelector('.progress-bar__fill');
        const text = bar.querySelector('.progress-bar__text');

        if (fill) {
          fill.style.width = percentage + '%';
        }
        if (text) {
          text.textContent = percentage + '% complete';
        }
      }
    });

    // Update mark complete button
    const completeBtn = document.querySelector('.mark-complete-btn');
    if (completeBtn) {
      const courseSlug = completeBtn.getAttribute('data-course');
      const lessonSlug = completeBtn.getAttribute('data-lesson');

      if (courseSlug && lessonSlug) {
        if (isLessonComplete(courseSlug, lessonSlug)) {
          completeBtn.textContent = 'Completed';
          completeBtn.classList.add('is-complete');
        } else {
          completeBtn.textContent = 'Mark as Complete';
          completeBtn.classList.remove('is-complete');
        }
      }
    }
  }

  // Initialize on DOM ready
  function init() {
    // Update UI on page load
    updateUI();

    // Handle mark complete button click
    const completeBtn = document.querySelector('.mark-complete-btn');
    if (completeBtn) {
      completeBtn.addEventListener('click', function() {
        const courseSlug = this.getAttribute('data-course');
        const lessonSlug = this.getAttribute('data-lesson');

        if (courseSlug && lessonSlug) {
          toggleLessonComplete(courseSlug, lessonSlug);
          updateUI();
        }
      });
    }

    // Handle checkbox clicks in TOC/lesson lists
    document.addEventListener('click', function(e) {
      const target = e.target;
      if (target.classList.contains('course-toc__check') ||
          target.classList.contains('lesson-check')) {
        e.preventDefault();
        e.stopPropagation();

        const courseSlug = target.getAttribute('data-course');
        const lessonSlug = target.getAttribute('data-lesson');

        if (courseSlug && lessonSlug) {
          toggleLessonComplete(courseSlug, lessonSlug);
          updateUI();
        }
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API for debugging
  window.CourseProgress = {
    getProgress: getProgress,
    isLessonComplete: isLessonComplete,
    markLessonComplete: markLessonComplete,
    markLessonIncomplete: markLessonIncomplete,
    toggleLessonComplete: toggleLessonComplete,
    calculateCourseProgress: calculateCourseProgress,
    updateUI: updateUI
  };

})();

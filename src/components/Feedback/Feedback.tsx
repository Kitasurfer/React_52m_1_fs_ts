import { useState, useCallback, memo, useEffect } from 'react';
import './styles.css';

interface IconProps {
  className?: string;
}

const LikeIcon = memo(({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
  </svg>
));

const DislikeIcon = memo(({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l.95-4.57-.03-.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/>
  </svg>
));

const ResetIcon = memo(({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zm-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z"/>
  </svg>
));

interface FeedbackProps {
  title?: string;
  initialLikes?: number;
  initialDislikes?: number;
  theme?: 'light' | 'dark';
  onReaction?: (type: 'like' | 'dislike' | 'reset') => void;
  className?: string;
}

function Feedback({
  title = "Feedback",
  initialLikes = 0,
  initialDislikes = 0,
  theme = 'light',
  onReaction,
  className = ''
}: FeedbackProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [activeEye, setActiveEye] = useState<'like' | 'dislike' | 'reset' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReaction = useCallback((type: 'like' | 'dislike' | 'reset') => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveEye(type);
    
    if (type === 'like') setLikes(prev => prev + 1);
    else if (type === 'dislike') setDislikes(prev => prev + 1);
    else {
      setLikes(initialLikes);
      setDislikes(initialDislikes);
    }

    onReaction?.(type);
    
    setTimeout(() => {
      setActiveEye(null);
      setIsAnimating(false);
    }, 2000);
  }, [initialLikes, initialDislikes, isAnimating, onReaction]);

  useEffect(() => {
    setLikes(initialLikes);
    setDislikes(initialDislikes);
  }, [initialLikes, initialDislikes]);

  return (
    <div className={`feedback-wrapper ${className}`}>
      <div className={`feedback-container ${theme}-theme`}>
        <h1 className="feedback-title">{title}</h1>
        
        <div className="feedback-stats">
          <StatItem 
            count={likes} 
            label="Likes" 
            isActive={activeEye === 'like'} 
            theme={theme}
          />
          <StatItem 
            count={dislikes} 
            label="Dislikes" 
            isActive={activeEye === 'dislike'} 
            theme={theme}
          />
        </div>

        <div className="feedback-actions">
          <ReactionButton
            type="like"
            onClick={handleReaction}
            theme={theme}
            disabled={isAnimating}
          />
          <ReactionButton
            type="dislike"
            onClick={handleReaction}
            theme={theme}
            disabled={isAnimating}
          />
        </div>

        <div className="reset-section">
          <ReactionButton
            type="reset"
            onClick={handleReaction}
            theme={theme}
            disabled={isAnimating}
          />
        </div>
      </div>

      <EyesOverlay activeEye={activeEye} theme={theme} />
    </div>
  );
}

interface StatItemProps {
  count: number;
  label: string;
  isActive: boolean;
  theme: 'light' | 'dark';
}

const StatItem = memo(({ count, label, isActive, theme }: StatItemProps) => (
  <div className={`stat-item ${isActive ? 'pulse' : ''}`}>
    <span className="stat-count" aria-live="polite">{count}</span>
    <span className={`stat-label ${theme}-theme`}>{label}</span>
  </div>
));

interface ReactionButtonProps {
  type: 'like' | 'dislike' | 'reset';
  onClick: (type: 'like' | 'dislike' | 'reset') => void;
  theme: 'light' | 'dark';
  disabled?: boolean;
}

const ReactionButton = memo(({ type, onClick, theme, disabled }: ReactionButtonProps) => {
  const buttonConfig = {
    like: {
      label: 'Like',
      Icon: LikeIcon,
      className: 'like-button'
    },
    dislike: {
      label: 'Dislike',
      Icon: DislikeIcon,
      className: 'dislike-button'
    },
    reset: {
      label: 'Reset',
      Icon: ResetIcon,
      className: 'reset-button'
    }
  }[type];

  return (
    <button
      className={`feedback-button ${buttonConfig.className} ${theme}-theme`}
      onClick={() => onClick(type)}
      aria-label={buttonConfig.label}
      disabled={disabled}
    >
      <buttonConfig.Icon className={`icon ${theme}-theme`} />
      {buttonConfig.label}
    </button>
  );
});

interface EyesOverlayProps {
  activeEye: 'like' | 'dislike' | 'reset' | null;
  theme: 'light' | 'dark';
}

const EyesOverlay = memo(({ activeEye, theme }: EyesOverlayProps) => (
  <div className={`eyes-container ${theme}-theme ${activeEye ? 'active' : ''}`}>
    {activeEye === 'like' && <div className="eye-loader like2 loader" />}
    {activeEye === 'reset' && <div className="eye-loader dislike-eyes loader" />}
    {activeEye === 'dislike' && <div className="eye-loader reset-eyes loader" />}
  </div>
));

export default memo(Feedback);
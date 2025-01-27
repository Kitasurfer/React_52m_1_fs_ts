export interface FeedbackProps {
  title?: string;
  initialLikes?: number;
  initialDislikes?: number;
  theme?: 'light' | 'dark';
  onReaction?: (type: 'like' | 'dislike' | 'reset') => void;
  className?: string;
}
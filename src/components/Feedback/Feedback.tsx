/** @jsxImportSource @emotion/react */
import { useState, useCallback, memo, useEffect } from 'react';
import {
  wrapperStyle,
  containerStyle,
  titleStyle,
  statsStyle,
  statItemStyle,
  statCountStyle,
  statLabelStyle,
  actionsStyle,
  resetSectionStyle,
  likeButtonStyle,
  dislikeButtonStyle,
  resetButtonStyle
} from './styles';
import { LikeIcon, DislikeIcon, ResetIcon } from './IconsFeedback';
import type { FeedbackProps } from './types';

function Feedback({
  title = 'Feedback',
  initialLikes = 0,
  initialDislikes = 0,
  theme = 'light',
  onReaction,
}: FeedbackProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReaction = useCallback(
    (type: 'like' | 'dislike' | 'reset') => {
      if (isAnimating) return;
      setIsAnimating(true);

      if (type === 'like') {
        setLikes((prev) => prev + 1);
      } else if (type === 'dislike') {
        setDislikes((prev) => prev + 1);
      } else {
        // reset
        setLikes(initialLikes);
        setDislikes(initialDislikes);
      }

      onReaction?.(type);

      // Короткая задержка для имитации анимации
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    },
    [initialLikes, initialDislikes, isAnimating, onReaction]
  );

  // Синхронизируем локальный стейт, если изменились initialLikes/initialDislikes
  useEffect(() => {
    setLikes(initialLikes);
    setDislikes(initialDislikes);
  }, [initialLikes, initialDislikes]);

  return (
    <div css={wrapperStyle}>
      <div css={containerStyle(theme)}>
        <h1 css={titleStyle}>{title}</h1>

        <div css={statsStyle}>
          <div css={statItemStyle}>
            <span css={statCountStyle}>{likes}</span>
            <span css={statLabelStyle}>Likes</span>
          </div>
          <div css={statItemStyle}>
            <span css={statCountStyle}>{dislikes}</span>
            <span css={statLabelStyle}>Dislikes</span>
          </div>
        </div>

        <div css={actionsStyle}>
          <button
            css={[likeButtonStyle]}
            onClick={() => handleReaction('like')}
            disabled={isAnimating}
          >
            <LikeIcon />
            <span css={{ marginLeft: 8 }}>Like</span>
          </button>
          <button
            css={[dislikeButtonStyle]}
            onClick={() => handleReaction('dislike')}
            disabled={isAnimating}
          >
            <DislikeIcon />
            <span css={{ marginLeft: 8 }}>Dislike</span>
          </button>
        </div>

        <div css={resetSectionStyle}>
          <button
            css={[resetButtonStyle]}
            onClick={() => handleReaction('reset')}
            disabled={isAnimating}
          >
            <ResetIcon />
            <span css={{ marginLeft: 8 }}>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Feedback);

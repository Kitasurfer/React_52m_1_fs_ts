/** @jsxImportSource @emotion/react */
import { useState, useCallback, memo, useEffect } from 'react'
import { css } from '@emotion/react'
import { feedbackStyles } from './styles'
import { LikeIcon, DislikeIcon, ResetIcon } from './IconsFeedback'
import type { FeedbackProps } from './types'

const Feedback = ({
  title = "Feedback",
  initialLikes = 0,
  initialDislikes = 0,
  theme = 'light',
  onReaction,
  className = ''
}: FeedbackProps) => {
  const [likes, setLikes] = useState(initialLikes)
  const [dislikes, setDislikes] = useState(initialDislikes)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleReaction = useCallback((type: 'like' | 'dislike' | 'reset') => {
    if (isAnimating) return

    setIsAnimating(true)
    
    if (type === 'like') setLikes(prev => prev + 1)
    else if (type === 'dislike') setDislikes(prev => prev + 1)
    else {
      setLikes(initialLikes)
      setDislikes(initialDislikes)
    }

    onReaction?.(type)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 100)
  }, [initialLikes, initialDislikes, isAnimating, onReaction])

  useEffect(() => {
    setLikes(initialLikes)
    setDislikes(initialDislikes)
  }, [initialLikes, initialDislikes])

  return (
    <div css={feedbackStyles.wrapper} className={className}>
     
      <div css={feedbackStyles.container?.(theme)}>
        <h1 css={feedbackStyles.title}>{title}</h1>
        
        <div css={feedbackStyles.stats}>
        
          <div css={feedbackStyles.statItem}>
            <span css={feedbackStyles.statCount}>{likes}</span>
           
            <span css={feedbackStyles.statLabel}>Likes</span>
          </div>
          <div css={feedbackStyles.statItem}>
            <span css={feedbackStyles.statCount}>{dislikes}</span>
            <span css={feedbackStyles.statLabel}>Dislikes</span>
          </div>
        </div>
  
        <div css={feedbackStyles.actions}>
          <button 
       
            css={[feedbackStyles.button?.('like'), css`gap: 8px;`]}
            onClick={() => handleReaction('like')}
            disabled={isAnimating}
          >
            <LikeIcon />
            Like
          </button>
          <button
            css={[feedbackStyles.button?.('dislike'), css`gap: 8px;`]}
            onClick={() => handleReaction('dislike')}
            disabled={isAnimating}
          >
            <DislikeIcon />
            Dislike
          </button>
        </div>
  
        <div css={feedbackStyles.resetSection}>
          <button
            css={[feedbackStyles.button?.('reset'), css`gap: 8px;`]}
            onClick={() => handleReaction('reset')}
            disabled={isAnimating}
          >
            <ResetIcon />
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(Feedback)
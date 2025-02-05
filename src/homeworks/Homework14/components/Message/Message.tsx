import React, { useContext } from 'react';
import { BlogContext } from '../../BlogContext';
import { MessageText } from './styles';

const Message: React.FC = () => {
  const blogContext = useContext(BlogContext);
  if (!blogContext) {
    throw new Error('Message должен использоваться внутри BlogProvider');
  }
  const { postedMessage } = blogContext;

  return (
    <MessageText>
      {postedMessage ? postedMessage : 'Нет сообщений'}
    </MessageText>
  );
};

export default Message;

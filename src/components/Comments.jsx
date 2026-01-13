import React, { useEffect, useState } from "react";

export default function Comments() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleSubmit = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: 'You',
        avatar: 'YU',
        content: comment,
        time: 'Just now',
        likes: 0
      };
      setComments([newComment, ...comments]);
      setComment('');
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-gray-300 rounded-3xl shadow-lg">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-6 text-blue-500 font-bold text-xl">💬</div>
        <h2 className="text-2xl font-bold text-gray-800">Comments</h2>
        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
          {comments.length}
        </span>
      </div>


      <div className="mb-8">
        <div className="relative group">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full min-h-24 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 text-gray-800 p-6 rounded-2xl placeholder:text-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300 resize-none shadow-sm hover:shadow-md group-hover:border-gray-300"
            rows="3"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-3">
            <span className="text-xs text-gray-400">
              {comment.length}/500
            </span>
            <button
              onClick={handleSubmit}
              disabled={!comment.trim()}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ➤
            </button>
          </div>
        </div>
      </div>


      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {comment.avatar}
              </div>
              
              {/* Comment Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-semibold text-gray-800">{comment.author}</h4>
                  <span className="text-xs text-gray-500">{comment.time}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4 text-start">{comment.content}</p>
                
                {/* Actions */}
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-200 group">
                    <span className="text-lg">♥</span>
                    <span className="text-sm font-medium">{comment.likes}</span>
                  </button>
                  
                  <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors duration-200 group">
                    <span className="text-lg">↩</span>
                    <span className="text-sm font-medium">Reply</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {comments.length > 0 && (
        <div className="text-center mt-8">
          <button className="text-blue-500 hover:text-blue-600 font-medium px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
            Load more comments
          </button>
        </div>
      )}
    </div>
  );
}
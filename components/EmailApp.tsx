import React, { useState, useEffect } from 'react';
import { 
  Menu, Search, Edit3, ChevronDown, 
  MoreHorizontal, Star, Clock, Trash2, 
  Reply, Forward, CornerUpLeft, Archive 
} from 'lucide-react';
import { EMAILS, FOLDERS, MOCK_USER, TAGS } from '../constants';
import { Email, Folder } from '../types';

const EmailApp: React.FC = () => {
  const [selectedFolderId, setSelectedFolderId] = useState<string>('inbox');
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(EMAILS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Filter emails based on folder
  const filteredEmails = EMAILS.filter(email => {
    if (selectedFolderId === 'trash') return email.folder === 'trash';
    if (selectedFolderId === 'archive') return email.folder === 'archive';
    if (selectedFolderId === 'sent') return email.folder === 'sent';
    // Default inbox excludes archive/trash
    return email.folder === 'inbox';
  });

  const selectedEmail = EMAILS.find(e => e.id === selectedEmailId);

  return (
    <div className="flex h-screen w-full bg-white text-notion-text overflow-hidden font-sans">
      {/* Sidebar */}
      <aside 
        className={`
          flex-shrink-0 bg-notion-sidebar border-r border-notion-border transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-64' : 'w-0 opacity-0 overflow-hidden'}
        `}
      >
        <div className="p-4 flex items-center gap-3 mb-2">
           <div className="w-6 h-6 rounded bg-neutral-200 overflow-hidden">
             <img src={MOCK_USER.avatar} alt="User" className="w-full h-full object-cover grayscale opacity-80" />
           </div>
           <span className="font-medium text-sm truncate flex-1">{MOCK_USER.email}</span>
           <ChevronDown size={14} className="text-notion-dim cursor-pointer" />
        </div>

        <div className="px-2 py-2">
           <button className="w-full flex items-center gap-2 px-3 py-1.5 mb-4 text-sm font-medium text-notion-dim hover:text-black hover:bg-notion-hover rounded transition-colors">
              <Edit3 size={16} /> Compose
           </button>

           <div className="space-y-0.5">
              {FOLDERS.map(folder => (
                <button
                  key={folder.id}
                  onClick={() => setSelectedFolderId(folder.id)}
                  className={`
                    w-full flex items-center justify-between px-3 py-1.5 text-sm rounded transition-colors
                    ${selectedFolderId === folder.id ? 'bg-notion-hover text-black font-medium' : 'text-notion-text hover:bg-notion-hover/50'}
                  `}
                >
                   <div className="flex items-center gap-2.5">
                      <folder.icon size={16} className={selectedFolderId === folder.id ? 'text-black' : 'text-notion-dim'} />
                      {folder.name}
                   </div>
                   {folder.count && (
                     <span className="text-xs text-notion-dim">{folder.count}</span>
                   )}
                </button>
              ))}
           </div>

           <div className="mt-8 px-3 text-xs font-semibold text-notion-dim uppercase tracking-wider mb-2">Labels</div>
           <div className="space-y-0.5">
              {TAGS.map(tag => (
                 <button key={tag.id} className="w-full flex items-center gap-2.5 px-3 py-1.5 text-sm text-notion-text hover:bg-notion-hover rounded transition-colors">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                    {tag.name}
                 </button>
              ))}
           </div>
        </div>
      </aside>

      {/* Middle Column: Email List */}
      <div className="flex-1 max-w-sm border-r border-notion-border flex flex-col bg-white">
         <div className="h-14 border-b border-notion-border flex items-center px-4 justify-between bg-white/50 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-3">
               {!isSidebarOpen && (
                 <button onClick={() => setIsSidebarOpen(true)} className="p-1 hover:bg-notion-hover rounded">
                   <Menu size={18} />
                 </button>
               )}
               <h2 className="font-semibold text-lg capitalize">{selectedFolderId}</h2>
            </div>
            <div className="p-1.5 hover:bg-notion-hover rounded text-notion-dim cursor-pointer">
               <Search size={18} />
            </div>
         </div>

         <div className="flex-1 overflow-y-auto">
            {filteredEmails.map(email => (
               <div 
                 key={email.id}
                 onClick={() => setSelectedEmailId(email.id)}
                 className={`
                   px-4 py-3 border-b border-notion-border cursor-pointer transition-colors group relative
                   ${selectedEmailId === email.id ? 'bg-blue-50/60' : 'hover:bg-notion-hover/40'}
                   ${!email.isRead ? 'bg-white' : 'bg-notion-bg'}
                 `}
               >
                  <div className="flex justify-between items-baseline mb-1">
                     <span className={`text-sm truncate pr-2 ${!email.isRead ? 'font-semibold text-black' : 'text-gray-800'}`}>
                       {email.sender.name}
                     </span>
                     <span className="text-xs text-notion-dim flex-shrink-0">{email.timestamp}</span>
                  </div>
                  <div className={`text-sm mb-1 truncate ${!email.isRead ? 'font-medium text-black' : 'text-gray-600'}`}>
                    {email.subject}
                  </div>
                  <div className="text-xs text-notion-dim line-clamp-2 leading-relaxed">
                    {email.preview}
                  </div>
                  {!email.isRead && (
                    <div className="absolute left-1 top-4 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  )}
               </div>
            ))}
            {filteredEmails.length === 0 && (
               <div className="p-8 text-center text-notion-dim text-sm">
                  No emails in {selectedFolderId}.
               </div>
            )}
         </div>
      </div>

      {/* Right Column: Email Detail */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden relative">
         {selectedEmail ? (
           <>
             {/* Toolbar */}
             <header className="h-14 border-b border-notion-border flex items-center justify-between px-6 bg-white sticky top-0">
                <div className="flex items-center gap-1">
                   <button 
                     onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                     className="p-1.5 hover:bg-notion-hover rounded text-notion-dim hover:text-black mr-2 md:hidden"
                   >
                     <Menu size={18} />
                   </button>
                   <div className="flex gap-1">
                      <TooltipIcon icon={Archive} />
                      <TooltipIcon icon={Trash2} />
                      <TooltipIcon icon={Clock} />
                   </div>
                   <div className="w-[1px] h-4 bg-notion-border mx-2"></div>
                   <TooltipIcon icon={Star} />
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-xs text-notion-dim bg-notion-sidebar px-2 py-1 rounded">Inbox</span>
                   <button className="p-1.5 hover:bg-notion-hover rounded text-notion-dim">
                     <MoreHorizontal size={18} />
                   </button>
                </div>
             </header>

             {/* Content */}
             <div className="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full">
                <div className="flex items-start justify-between mb-8">
                   <h1 className="text-2xl font-semibold text-gray-900 leading-tight">{selectedEmail.subject}</h1>
                   <div className="flex gap-2">
                      {selectedEmail.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 font-medium">{tag}</span>
                      ))}
                   </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                   <img src={selectedEmail.sender.avatar} alt="Sender" className="w-10 h-10 rounded-full object-cover border border-gray-100" />
                   <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                         <span className="font-medium text-black">{selectedEmail.sender.name}</span>
                         <span className="text-xs text-notion-dim">{selectedEmail.timestamp}, 10:42 AM</span>
                      </div>
                      <div className="text-sm text-notion-dim">to me</div>
                   </div>
                </div>

                <div className="prose prose-slate prose-sm max-w-none text-gray-800 leading-7 whitespace-pre-line">
                   {selectedEmail.body}
                </div>

                <div className="mt-12 pt-8 border-t border-notion-border flex gap-4">
                   <button className="flex items-center gap-2 px-4 py-2 rounded border border-notion-border text-sm font-medium hover:bg-notion-hover transition-colors">
                      <Reply size={16} /> Reply
                   </button>
                   <button className="flex items-center gap-2 px-4 py-2 rounded border border-notion-border text-sm font-medium hover:bg-notion-hover transition-colors">
                      <Forward size={16} /> Forward
                   </button>
                </div>
             </div>
           </>
         ) : (
            <div className="flex-1 flex items-center justify-center flex-col text-notion-dim">
               <div className="w-16 h-16 bg-notion-sidebar rounded-full flex items-center justify-center mb-4">
                  <CornerUpLeft size={24} />
               </div>
               <p>Select an email to read</p>
            </div>
         )}
      </main>
    </div>
  );
};

const TooltipIcon = ({ icon: Icon }: { icon: any }) => (
  <button className="p-2 hover:bg-notion-hover rounded text-gray-500 hover:text-black transition-colors">
     <Icon size={18} strokeWidth={1.5} />
  </button>
);

export default EmailApp;
import Link from 'next/link';
import React from 'react';
import avatarImg from '../../../../../public/assets/images/avatar/avatar.webp';
import avatarTwoImg from '../../../../../public/assets/images/avatar/avatar3.webp';
import avatarThreeImg from '../../../../../public/assets/images/avatar/avatar3.webp';
import avatarFourImg from '../../../../../public/assets/images/avatar/avatar2.webp';
import Image, { StaticImageData } from 'next/image';

interface CommentProps {
    avatar: StaticImageData;
    name: string;
    date: string;
    text: string;
    replies?: CommentProps[];
}

const Comment: React.FC<CommentProps> = ({ avatar, name, date, text, replies = [] }) => (
    <li>
        <div className="bd-postbox-comment-box">
            <div className="bd-postbox-comment-info">
                <div className="bd-postbox-comment-avatar">
                    <Image src={avatar} alt="avatar" />
                </div>
            </div>
            <div className="bd-postbox-comment-text">
                <div className="bd-postbox-comment-name">
                    <h5 className="title mb--5"><Link href="#">{name}</Link></h5>
                    <span className="post-meta">{date}</span>
                </div>
                <p>{text}</p>
                <div className="bd-postbox-comment-reply">
                    <Link href="#">Reply</Link>
                </div>
            </div>
        </div>
        {replies.length > 0 && (
            <ul className="children">
                {replies.map((reply, index) => (
                    <Comment key={index} {...reply} />
                ))}
            </ul>
        )}
    </li>
);

const PostboxComment: React.FC = () => {
   // inside `const comments: CommentProps[] = [...]`
const comments: CommentProps[] = [
    {
        avatar: avatarImg,
        name: "Anish Thapa",
        date: "May 10, 2025",
        text: "The BBA program at Reliable College gave me real-world business skills. I feel well-prepared for the corporate world.",
        replies: [
            {
                avatar: avatarTwoImg,
                name: "Manish Shrestha",
                date: "May 11, 2025",
                text: "Agreed! The internship opportunities were especially valuable during my MBA journey."
            }
        ]
    },
    {
        avatar: avatarThreeImg,
        name: "Shristi Koirala",
        date: "May 8, 2025",
        text: "I loved the case-based teaching method. The MBA faculty at Reliable are highly supportive and industry-focused."
    },
    {
        avatar: avatarFourImg,
        name: "Pravin KC",
        date: "May 6, 2025",
        text: "From entrepreneurship bootcamps to research projects, Reliable College offers the perfect BBA-MBA pipeline in Nepal."
    }
];


    return (
        <div className="bd-postbox-comment">
            <ul>
                {comments.map((comment, index) => (
                    <Comment key={index} {...comment} />
                ))}
            </ul>
        </div>
    );
};

export default PostboxComment;

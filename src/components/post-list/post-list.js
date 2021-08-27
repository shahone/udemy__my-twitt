import React from 'react';
import './post-list.css';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

  const elements = posts.map(item => {
    const {id, ...itemProps} = item; // разложили item на id и то что осталось
    return (
      <li className="list-group-item" key={id}>
         {/* <PostListItem
            label={item.label}
            important={item.important}
          /> */}
          <PostListItem
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLiked={() => onToggleLiked(id)}
          />
      </li>
    )
  })

  // return (
  //   <ul className="app-list list-group">
  //     <PostListItem label="Going to learn React" important/>
  //     <PostListItem label="Going to learn JSX"/>
  //     <PostListItem label="Going to learn props"/>
  //   </ul>
  // )
  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;
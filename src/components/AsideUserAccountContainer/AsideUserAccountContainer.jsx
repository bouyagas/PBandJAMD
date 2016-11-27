import React from 'react';
import '../normalize.css';
import './AsideUserAccountContainer.css';
import AsideUserAccountTemplate from '../AsideUserAccountTemplate/AsideUserAccountTemplate.jsx';
import CreateTopicForm from '../CreateTopicForm/CreateTopicForm.jsx';

const AsideUserAccountContainer = props => {
  const userTopics = props.userTopics.map((topic) => {
    return (
      <AsideUserAccountTemplate
        key={topic.id.toString()}
        title={topic.title}
        content={topic.content}
        date_created={topic.date_created}
      />
    );
  });

  return (
    <div id="AsideUserAccountContainer">
      <button onClick={props.changeSidebar} id="sidebarButton">{props.buttonText}</button>

      <div id={props.sidebar}>
        <CreateTopicForm topicTitle={props.topicTitle} topicContent={props.topicContent} updateTopicTitle={props.updateTopicTitle} updateTopicContent={props.updateTopicContent} handleCreateTopic={props.handleCreateTopic} />
        <p>Threads you have started:</p>
        {userTopics}
      </div>

    </div>
  );
};

export default AsideUserAccountContainer;

```javascript
import React from 'react';
import { connect } from 'react-redux';

// Component for displaying GitHub repositories
class RepoList extends React.Component {
    render() {
        const { repos } = this.props;
        return (
            <div>
                {repos.map(repo => (
                    <div key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

// Map state to props
const mapStateToProps = state => ({
    repos: state.repos
});

// Connect RepoList component to Redux store
export default connect(mapStateToProps)(RepoList);

// Component for displaying AI responses
class AIResponse extends React.Component {
    render() {
        const { aiResponse } = this.props;
        return (
            <div>
                <h2>AI Response</h2>
                <p>{aiResponse}</p>
            </div>
        );
    }
}

// Map state to props
const mapStateToPropsAI = state => ({
    aiResponse: state.aiResponse
});

// Connect AIResponse component to Redux store
export default connect(mapStateToPropsAI)(AIResponse);
```
package app.messages;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class MessageRepository {
    
    private final static Log log = LogFactory.getLog(MessageRepository.class);

    public void saveMessage(Message message) {
        // 데이터베이스에 메시지를 저장한다.
        log.info("Saved message: " + message.getText());
    }
}

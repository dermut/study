package app.messages;

import app.messages.MessageRepository;
import app.messages.MessageService;

@Configuration
@ComponentScan("app.messages")
public class AppConfig {
    
    @Bean
    public MessageRepository messageRepository() {
        return new MessageRepository();
    }

    @Bean
    MessageService messageService() {
        return new MessageService(repository);
    }
}

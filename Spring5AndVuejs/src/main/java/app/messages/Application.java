package app.messages;

import app.messages.MessageService;

public class Application {
    public static void main(Stringp[] main) {
        ApplicationContext conext = new AnnotationConfigApplicationContext(AppConfig.class);
        MessageService messageService = context.getBean(MessageService.class);
        messageService.save("Hello, Spring!");
    }
}

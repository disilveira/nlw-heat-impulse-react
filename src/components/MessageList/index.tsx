import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="Do While 2021" />
            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Aqui eu vou inserir um comentário do sistema</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/disilveira.png" alt="Diego Silveira" />
                        </div>
                        <span>Diego Silveira</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Aqui eu vou inserir um comentário do sistema</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/disilveira.png" alt="Diego Silveira" />
                        </div>
                        <span>Diego Silveira</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Aqui eu vou inserir um comentário do sistema</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/disilveira.png" alt="Diego Silveira" />
                        </div>
                        <span>Diego Silveira</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
<?php
    $logins = json_decode(file_get_contents('../../logins.json'), true);

    if(isset($_POST['nome'], $_POST['email'], $_POST['senha'], $_POST['confirma_senha'])) {
        $logins[] = ['nome' => $_POST['nome'], 'email' => $_POST['email'], 'senha' => $_POST['senha']];
        file_put_contents('../../logins.json', json_encode($logins));
        header('Location: ../login/index.php');
    }
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="text/javascript" src="../../js/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="index.js"></script>
    <link rel="stylesheet"  href="style.css">
    <title>Cadastro</title>
</head>
<body>
    <section id="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#"><img src="../../home/images/logo.png"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="../../home/index.html">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../home/index.html#about">Sobre Nós</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../home/index.html#services">Serviços</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../home/index.html#team">Equipe</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../home/index.html#">Produtos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../home/index.html#contact">Contato</a>
                </li>
              </ul>
            </div>
          </nav>
    </section>
    
    <h1>Cadastro</h1>
        

    <form id="form_cadastro" method="POST" onsubmit="event.preventDefault(); return false">
        <label>Nome Completo</label>
        <div class="icone_user">
        <img src="../../assets/user.svg" class="svg_user">
        <input name="nome" type="text" id="nome" class="campo-formulario">
        </div>

        <label class="menor_label">E-mail</label>
        <div class="icone_email">
        <img src="../../assets/email.svg" class="svg_email">
        <input name="email" type="email" id="email" class="campo-formulario" />
        </div>

        <label class="menor_label">Senha</label>
        <div class="icone_cadeado">
        <img src="../../assets/lock.svg" class="svg_cadeado">
        <input name="senha" type="password" id="senha" class="campo-formulario" />
        </div>

        <label>Confirmar senha</label>
        <div class="icone_cadeado">
        <img src="../../assets/lock.svg" class="svg_cadeado">
        <input name="confirma_senha" type="password" id="confirma_senha" class="campo-formulario" />
        </div>

        <button id="salvar-formulario" class="salvar">CADASTRAR</button>
      </form>
</body>
</html>
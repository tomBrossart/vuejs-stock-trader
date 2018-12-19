<template>
    <div class="container-fluid">
            <nav class="row navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Stock Trader</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="col-md-8 navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Portfolio <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Stocks</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                            <a class="nav-link" href="#">End Day</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav"
    }
</script>

<style scoped>

</style>